import { FC } from 'react';

interface Post {
  id: string;
  attributes: {
    title: string;
    content: string;
  };
}

interface PostProps {
  posts: {
    data: Post[];
  };
}

const Post: FC<PostProps> = ({ posts }) => {
  return (
    <div>
      {posts.data.map((post) => (
        <article key={post.id}>
          <h2>{post.attributes.title}</h2>
          <p>{post.attributes.content}</p>
        </article>
      ))}
    </div>
  );
};

export default Post;