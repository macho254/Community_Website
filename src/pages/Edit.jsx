// src/pages/Edit.jsx

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        setTitle(data.title);
        setAuthor(data.author);
        setContent(data.content);
      })
      .catch(err => console.error('Failed to fetch blog:', err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updated = {
      title,
      author,
      content,
    };

    const res = await fetch(`http://localhost:3001/blogs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });

    if (res.ok) {
      navigate('/blogs'); // Or redirect to home
    } else {
      alert('Update failed.');
    }
  };

  if (!blog) return <div className="text-white p-6">Loading blog...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h2 className="text-2xl font-bold text-gold mb-6">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full p-2 bg-black border border-gold rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-2 bg-black border border-gold rounded"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          rows="12"
          className="w-full p-2 bg-black border border-gold rounded font-mono"
          placeholder="Your markdown content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gold text-black px-4 py-2 rounded hover:opacity-80"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
