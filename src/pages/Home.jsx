import { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import FeedbackCard from "../components/FeedbackCard";

export default function Home() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "feedbacks"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFeedbacks(data);
      } catch (error) {
        console.error("Greška prilikom učitavanja:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  const handleLike = async (id, likes) => {
    const docRef = doc(db, "feedbacks", id);
    await updateDoc(docRef, { likes: likes + 1 });
    setFeedbacks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">User impressions:</h2>
      {feedbacks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {feedbacks.map((f) => (
            <FeedbackCard key={f.id} feedback={f} onLike={handleLike} />
          ))}
        </div>
      ) : (
        <h4 className="text-2xl font-medium mx-auto mt-5">
          No impressions yet.
        </h4>
      )}
    </div>
  );
}
