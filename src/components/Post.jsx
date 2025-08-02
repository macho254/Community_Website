// export default function Post({ title, content }) {
//   return (
//     <div className="border border-gold p-4 rounded-xl bg-black/30">
//       <h2 className="text-xl font-semibold text-gold">{title}</h2>
//       <p className="mt-2 text-sm leading-relaxed">{content}</p>
//     </div>
//   );
// }
import { useState } from "react";

export default function Post({ id, title, content, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleSave = () => {
    onEdit(id, editedTitle, editedContent);
    setIsEditing(false);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-700 p-4 rounded-xl shadow-md">
      {isEditing ? (
        <div className="space-y-2">
          <input
            className="w-full bg-zinc-800 border border-zinc-600 p-2 rounded text-white"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className="w-full bg-zinc-800 border border-zinc-600 p-2 rounded text-white"
            rows={4}
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <div className="flex justify-end space-x-2 text-sm mt-2">
            <button
              className="px-3 py-1 bg-gold text-black rounded hover:opacity-90"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="px-3 py-1 border border-zinc-600 text-white rounded hover:text-zinc-300"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-lg font-semibold text-gold">{title}</h2>
          <p className="text-sm mt-2 text-white whitespace-pre-wrap">{content}</p>
          <div className="flex justify-end space-x-4 text-xs mt-4 text-zinc-400">
            <button onClick={() => setIsEditing(true)} className="hover:text-gold">Edit</button>
            <button onClick={() => onDelete(id)} className="hover:text-red-400">Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

