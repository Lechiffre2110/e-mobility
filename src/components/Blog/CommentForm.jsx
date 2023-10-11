import React from 'react';

/**
 * Component for entering and submitting a comment.
 */
function CommentForm({selectedPostId, onComment, authorName, setAuthorName, commentText, setCommentText, validationError, t }) {
  return (
    <div className="comment-form space-y-3">
      <input
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 transition"
        placeholder={t("blogpage.commentform.name")}
      />
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 transition"
        placeholder={t("blogpage.commentform.commentcontent")}
      ></textarea>
      {validationError && (
        <p className="text-red-500 mt-2">{validationError}</p>
      )}
      <button
        onClick={() => onComment(selectedPostId)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition focus:outline-none"
      >
        {t("blogpage.commentsubmitbutton")}
      </button>
    </div>
  );
}

export default CommentForm;
