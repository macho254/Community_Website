 
import { useState, useEffect } from "react";

export default function NewPost({ addPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  // Restore from localStorage
  useEffect(() => {
    const savedTitle = localStorage.getItem("draftTitle");
    const savedContent = localStorage.getItem("draftContent");
    if (savedTitle) setTitle(savedTitle);
    if (savedContent) setContent(savedContent);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("draftTitle", title);
  }, [title]);

  useEffect(() => {
    localStorage.setItem("draftContent", content);
  }, [content]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Title and content cannot be empty.");
      return;
    }

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
    };

    addPost(newPost);
    setTitle("");
    setContent("");
    setError("");

    // Clear the localStorage draft
    localStorage.removeItem("draftTitle");
    localStorage.removeItem("draftContent");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-zinc-800 p-6 rounded-xl border border-zinc-700">
      <div>
        <label className="text-sm text-zinc-300 block mb-1">Title</label>
        <input
          type="text"
          className="w-full p-2 bg-zinc-900 border border-zinc-600 rounded text-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. The Fire Behind the Mask"
        />
      </div>
      <div>
        <label className="text-sm text-zinc-300 block mb-1">Content</label>
        <textarea
          rows={5}
          className="w-full p-2 bg-zinc-900 border border-zinc-600 rounded text-white"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your thoughts here…"
        />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        type="submit"
        className="bg-gold text-black font-semibold px-4 py-2 rounded hover:opacity-90"
      >
        Publish
      </button>
    </form>
  );
}
