export default function FeedbackCard({ feedback, onLike }) {
  return (
    <div className="bg-slate-800 p-4 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-gray-200 mb-4">{feedback.message}</p>
      <button
        onClick={() => onLike(feedback.id, feedback.likes)}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition"
      >
        ❤️ {feedback.likes || 0} Like
      </button>
    </div>
  );
}
