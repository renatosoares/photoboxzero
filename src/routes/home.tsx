import React, { useEffect, useState } from "react";

import HomePage from "components/pages/Home";

import { getPosts } from "hooks/posts";
import PostProps from "models/types/PostProps";

const Home = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    (async () => {
      setPosts(await getPosts());
    })();
  }, []);

  return <HomePage posts={posts} />;
};

export default Home;
