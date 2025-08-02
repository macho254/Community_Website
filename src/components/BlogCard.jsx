const BlogCard = ({ post }) => (
  <div className="bg-[#111] border border-gold/30 rounded-xl p-4 mb-4">
    <h2 className="text-xl font-semibold text-gold mb-2">{post.title}</h2>
    <p className="text-white/90 whitespace-pre-wrap">{post.content}</p>
    <p className="text-xs text-white/50 mt-4">— {post.author || "Anonymous"}</p>
  </div>
)

export default BlogCard;
