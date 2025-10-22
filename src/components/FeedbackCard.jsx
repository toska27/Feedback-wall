export default function FeedbackCard({ feedback, onLike, onDelete }) {
  return (
    <div className="bg-slate-800 p-4 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-gray-200 mb-4">{feedback.message}</p>
      <button
        onClick={() => onLike(feedback.id, feedback.likes)}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition cursor-pointer"
      >
        ❤️ {feedback.likes || 0} Like
      </button>
      <button
        onClick={() => onDelete(feedback.id)}
        className="flex items-center gap-2 text-sm text-gray-400 mt-2 hover:text-pink-400 transition cursor-pointer"
      >
        🗑 Delete
      </button>
    </div>
  );
}
