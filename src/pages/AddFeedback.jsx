import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import FeedbackForm from "../components/FeedbackForm";

export default function AddFeedback() {
  const navigate = useNavigate();

  const handleAddFeedback = async (message) => {
    await addDoc(collection(db, "feedbacks"), {
      message,
      likes: 0,
      createdAt: serverTimestamp(),
    });
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-slate-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-4">
        Leave your impression 💬
      </h2>
      <FeedbackForm onSubmit={handleAddFeedback} />
    </div>
  );
}
