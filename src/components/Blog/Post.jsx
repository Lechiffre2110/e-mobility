import React from 'react';

/**
 * Component for displaying each post.
 */
function Post({ post, onComment, t }) {
  return (
    <div className="post bg-white p-5 rounded-md shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
      <p className="text-xs text-gray-500">
        {new Date(post.date).toLocaleDateString()} {t("blogpage.at")}{" "}
        {new Date(post.date).toLocaleTimeString()}
      </p>
      <p>{post.content}</p>
      {post.comments.map((comment) => (
        <div key={comment._id} className="comment pl-4 border-l-4 border-gray-400 space-y-2">
          <p>
            <span className="font-semibold">{comment.author}</span>
            <br />
            <span className="text-xs text-gray-500">
              {new Date(comment.date).toLocaleDateString()} {t("blogpage.at")}{" "}
              {new Date(comment.date).toLocaleTimeString()}
            </span>
            <br />
            {comment.content}
          </p>
        </div>
      ))}
      <button
        className="text-sm text-blue-500 hover:underline focus:outline-none"
        onClick={onComment}
      >
        {t("blogpage.comment")}
      </button>
    </div>
  );
}

export default Post;
