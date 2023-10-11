// hooks/usePosts.js

import { useState, useEffect } from 'react';

/**
 * A custom hook for managing and fetching posts.
 */
export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5555/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.data));
  }, []);

  return [posts, setPosts];
};

export default usePosts;