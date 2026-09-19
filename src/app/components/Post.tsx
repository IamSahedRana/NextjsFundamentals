import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  category: string;
  description: string;
  image: string;
  date: string;
}

interface PostProps {
  post: BlogPost;
}

const Post = ({ post }: PostProps) => {
  const {id, title, description, author, category, image, date } = post;

  return (
    <div className="card card-dash bg-base-100 w-96">
      <figure>
        <img src={image} alt={title} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <p>{description}</p>

        <p>Author: {author}</p>
        <p>Category: {category}</p>
        <p>Date: {date}</p>

        <div className="card-actions justify-end">
      <Link href={`/blog/${id}`}>
          <button className="btn btn-primary">
            Show Details
          </button>
      </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;