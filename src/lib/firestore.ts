import { db } from "./firebase";
import { collection, doc, getDocs, getDoc, setDoc, updateDoc, addDoc, query, where, orderBy, Timestamp, runTransaction } from "firebase/firestore";
import { Agent, AgentCall, AgentReview } from "./types";
import { MOCK_AGENTS } from "./dummyData"; // TODO: DEMO — Remove once Firestore has real agents

export const getAgents = async (): Promise<Agent[]> => {
  const q = query(collection(db, "agents"), where("status", "==", "active"));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return MOCK_AGENTS; // TODO: DEMO — Return [] once Firestore has real agents
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Agent));
};

export const getAgentById = async (id: string): Promise<Agent | null> => {
  // TODO: DEMO — Remove this MOCK_AGENTS check. It runs BEFORE Firestore, so mock agents always take priority.
  const mockAgent = MOCK_AGENTS.find(a => a.id === id);
  if (mockAgent) return mockAgent;

  const docRef = doc(db, "agents", id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() } as Agent;
};

export const getAgentReviews = async (agentId: string): Promise<AgentReview[]> => {
  const q = query(collection(db, "agent_reviews"), where("agentId", "==", agentId), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as AgentReview));
};

export const createAgent = async (agent: Omit<Agent, "id" | "createdAt" | "updatedAt">): Promise<string> => {
  const docRef = await addDoc(collection(db, "agents"), {
    ...agent,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
  return docRef.id;
};

export const checkHasRunSandbox = async (agentId: string, userId: string): Promise<boolean> => {
  const q = query(
    collection(db, "agent_calls"),
    where("agentId", "==", agentId),
    where("userId", "==", userId)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.length > 0;
};

export const addReview = async (agentId: string, userId: string, rating: number, body: string): Promise<void> => {
  const agentRef = doc(db, "agents", agentId);
  const reviewRef = doc(collection(db, "agent_reviews"));

  await runTransaction(db, async (transaction) => {
    const agentDoc = await transaction.get(agentRef);
    if (!agentDoc.exists()) throw new Error("Agent does not exist!");

    const data = agentDoc.data() as Agent;
    const currentRating = data.rating || 0;
    const currentCount = data.reviewCount || 0;

    const newCount = currentCount + 1;
    const newRating = ((currentRating * currentCount) + rating) / newCount;

    transaction.set(reviewRef, {
      id: reviewRef.id,
      agentId,
      userId,
      rating,
      body,
      createdAt: Timestamp.now()
    });

    transaction.update(agentRef, {
      rating: newRating,
      reviewCount: newCount,
      updatedAt: Timestamp.now()
    });
  });
};

export const submitCopyrightClaim = async (claim: {
  agentId: string;
  agentName: string;
  reporterId: string;
  reporterUsername: string;
  originalAgentUrl: string;
  description: string;
  evidenceUrl: string;
  relationship: "creator" | "representative";
}): Promise<string> => {
  const docRef = await addDoc(collection(db, "copyright_claims"), {
    ...claim,
    status: "pending",
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};

export const hasCopyrightClaim = async (agentId: string, userId: string): Promise<boolean> => {
  const q = query(
    collection(db, "copyright_claims"),
    where("agentId", "==", agentId),
    where("reporterId", "==", userId)
  );
  const snapshot = await getDocs(q);
  return !snapshot.empty;
};
