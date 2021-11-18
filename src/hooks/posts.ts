import ApiPostProps from "models/types/ApiPostProps";
import PostProps from "models/types/PostProps";

const BASE_URI = process.env.REACT_APP_BASE_URI_WP_JSON_API;

// type PostsUsePostProps = {
//   slang: string;
// };

const publications = async () => {
  return {
    data: [
      {
        type: "publications",
        id: "6",
        attributes: {
          id: 6,
          title: "Céu Azul",
          slug: "ceu-azul",
          user_id: 8,
          media_id: 2,
          body: null,
          active: true,
          metadata: [],
          publish_at: "2021-10-17T08:20:36.000000Z",
          unpublish_at: null,
          created_at: "2021-11-15T15:47:06.000000Z",
          updated_at: "2021-11-15T15:47:06.000000Z",
          deleted_at: null,
        },
      },
    ],
    links: {
      first: "http://photobox.d3v/api/public/publication?page=1",
      last: "http://photobox.d3v/api/public/publication?page=1",
      prev: null,
      next: null,
    },
    meta: {
      current_page: 1,
      from: 1,
      last_page: 1,
      links: [
        {
          url: null,
          label: "&laquo; Previous",
          active: false,
        },
        {
          url: "http://photobox.d3v/api/public/publication?page=1",
          label: "1",
          active: true,
        },
        {
          url: null,
          label: "Next &raquo;",
          active: false,
        },
      ],
      path: "http://photobox.d3v/api/public/publication",
      per_page: 15,
      to: 1,
      total: 1,
    },
  };
};

export const highlightPosts = async () => {
  return publications();
  // const postsResponse = fetch(`${BASE_URI}posts/?categories=1`);

  // const [posts] = await Promise.all([postsResponse]);

  // const postsJson = await posts.json();

  // return postsJson;
};

export const getPosts = async (): Promise<PostProps[]> => {
  const highlight = await highlightPosts();

  const posts = highlight.data.map((post: ApiPostProps): PostProps => {
    return {
      id: post.attributes.id,
      title: post.attributes.title,
      slang: post.attributes.slug,
      summary: post.attributes.body || "",
      image: "//picsum.photos/300/300",
      mediaId: post.attributes.media_id,
    };
  });

  return posts;
};
