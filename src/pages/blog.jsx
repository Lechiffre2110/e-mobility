import React, { useState, useMemo } from "react";
import usePosts from "../hooks/usePosts";
import CategoryFilter from "../components/Blog/CategoryFilter";
import Post from "../components/Blog/Post";
import CommentForm from "../components/Blog/CommentForm";
import PostForm from "../components/Blog/PostForm";

function Blog({ t }) {
  const [posts, setPosts] = usePosts();
  const [selectedCategory, setSelectedCategory] = useState(null);

  // For the PostForm
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postCategory, setPostCategory] = useState("");

  // For the CommentForm
  const [authorName, setAuthorName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [validationError, setValidationError] = useState("");
  const [currentAction, setCurrentAction] = useState("VIEW");
  const [selectedPostId, setSelectedPostId] = useState(null);

  const allCategories = useMemo(
    () => [...new Set(posts.map((post) => post.category))],
    [posts]
  );

  /**
   * Fetch all posts from the server
   */
  const fetchPosts = () => {
    fetch("http://localhost:5555/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.data));
  };

  /**
   *  Handle the submission of a comment for a given post or parent comment
   * @param {*} postId
   * @param {*} parentCommentId
   *
   */

  const handleSubmitComment = (postId, parentCommentId = null) => {
    if (!commentText.trim()) {
      setValidationError("Comment cannot be empty");
      return;
    }

    const author = authorName.trim() || "Anonymous";
    const commentData = {
      author: author,
      content: commentText,
      date: new Date().toISOString(),
    };

    fetch(`http://localhost:5555/api/posts/comment/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Instead of manually updating the state, fetch the data again
        fetchPosts();
      })
      .catch((error) => {
        console.error("Error adding a comment:", error.message);
      });

    setCommentText("");
    setAuthorName("");
    setSelectedPostId(null);
    setSelectedCommentId(null);
    setValidationError("");
    setCurrentAction("VIEW");
  };

  /**
   * Handle the creation of a new post
   */
  const handleCreatePost = () => {
    if (!postTitle.trim() || !postContent.trim() || !postCategory.trim()) {
      setValidationError("Post title, content, and category cannot be empty");
      return;
    }

    const newPost = {
      title: postTitle,
      content: postContent,
      category: postCategory,
      createdDate: new Date().toISOString(),
      comments: [],
    };

    fetch("http://localhost:5555/api/posts/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((prevPosts) => [...prevPosts, data.data]);
        setPostTitle("");
        setPostContent("");
        setPostCategory("");
      })
      .catch((error) => console.error("Error creating a post:", error.message));
  };
  return (
    <div className="blog-container px-4 py-6 space-y-6">
      <CategoryFilter
        allCategories={allCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        t={t}
      />

      <div className="posts space-y-6">
        {posts
          .filter(
            (post) => !selectedCategory || post.category === selectedCategory
          )
          .map((post) => (
            <Post
              key={post._id}
              post={post}
              onComment={() => {
                setSelectedPostId(post._id);
                setCurrentAction("COMMENT");
              }}
              t={t}
            />
          ))}
      </div>

      {currentAction === "COMMENT" && (
        <CommentForm
          selectedPostId={selectedPostId}
          onComment={handleSubmitComment}
          authorName={authorName}
          setAuthorName={setAuthorName}
          commentText={commentText}
          setCommentText={setCommentText}
          validationError={validationError}
          t={t}
        />
      )}

      {currentAction === "VIEW" && (
        <PostForm
          onCreatePost={handleCreatePost}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postContent={postContent}
          setPostContent={setPostContent}
          postCategory={postCategory}
          setPostCategory={setPostCategory}
          t={t}
        />
      )}
    </div>
  );
}

export default Blog;
