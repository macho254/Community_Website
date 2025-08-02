import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Error fetching blogs:', err));
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 bg-black text-white relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gold tracking-wide">Field Notes</h2>

        <Link
          to="/write"
          className="bg-gold text-black px-4 py-2 rounded-xl font-semibold hover:bg-yellow-400 transition"
        >
          ✍️ Write Your Own
        </Link>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto">
        {blogs.length === 0 ? (
          <p className="text-gray-400">No blog posts yet. Be the first to write one!</p>
        ) : (
          blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#111] p-5 rounded-xl border border-gold hover:shadow-lg hover:shadow-gold transition"
            >
              <h3 className="text-xl font-semibold text-gold">{blog.title}</h3>
              <p className="text-sm mt-2 text-gray-400 italic">by {blog.author}</p>
              <p className="text-white mt-4 whitespace-pre-wrap">
                {blog.content.slice(0, 200)}...
              </p>
              <div className="flex justify-end mt-4 space-x-4">
                <Link
                  to={`/edit/${blog.id}`}
                  className="text-sm text-gold hover:underline"
                >
                  Edit
                </Link>
                <Link
                  to={`/delete/${blog.id}`}
                  className="text-sm text-red-500 hover:underline"
                >
                  Delete
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
