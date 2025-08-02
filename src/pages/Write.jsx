import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Write() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:3001/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author, content })
    });

    navigate('/blog'); // go back to blog page
  };

  return (
    <div className="p-6 bg-background min-h-screen text-white">
      <h2 className="text-3xl font-bold text-gold mb-4">Write Your Field Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 bg-[#111] border border-gold rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author (optional)"
          className="w-full p-2 bg-[#111] border border-gold rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder="Your thoughts..."
          className="w-full p-4 h-60 bg-[#111] border border-gold rounded resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-gold text-black px-4 py-2 rounded hover:opacity-90"
        >
          Publish Note
        </button>
      </form>
    </div>
  );
}
