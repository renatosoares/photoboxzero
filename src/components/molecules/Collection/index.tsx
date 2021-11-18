import React from "react";

import PostProps from "models/types/PostProps";

type CollectionProps = {
  posts: PostProps[];
};

const Collection = ({ posts }: CollectionProps) => {
  return (
    <div className="collection">
      <div className="container">
        {posts.map((post) => (
          <div className="post-content">
            <img src={post.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
