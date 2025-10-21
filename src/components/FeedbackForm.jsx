import { useState } from "react";

export default function FeedbackForm({ onSubmit }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSubmit(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="w-full h-32 p-3 rounded-lg bg-slate-700 text-white outline-none mb-4"
        placeholder="Write your own impression..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-lg font-medium"
      >
        Send
      </button>
    </form>
  );
}
