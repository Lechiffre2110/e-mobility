import React from 'react';

/**
 * Component for creating new posts.
 */
function PostForm({ onCreatePost, postTitle, setPostTitle, postContent, setPostContent, postCategory, setPostCategory, t }) {
  return (
    <div className="new-post-form space-y-3 mt-6">
      <input
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 transition"
        placeholder={t("blogpage.postform.posttitle.placeholder")}
      />
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 transition"
        placeholder={t("blogpage.postform.postcontent.placeholder")}
      ></textarea>
      <input
        value={postCategory}
        onChange={(e) => setPostCategory(e.target.value)}
        className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 transition"
        placeholder={t("blogpage.postform.postcategory.placeholder")}
      />
      <button
        onClick={onCreatePost}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition focus:outline-none"
      >
        {t("blogpage.postsubmitbutton")}
      </button>
    </div>
  );
}

export default PostForm;
