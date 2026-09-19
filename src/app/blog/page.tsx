
import Post from "../components/Post";

const blogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Sahed Rana",
    category: "React",
    description:
      "Learn the basics of React and how to build interactive user interfaces.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    date: "2026-09-01",
  },
  {
    id: 2,
    title: "Understanding JavaScript Functions",
    author: "John Doe",
    category: "JavaScript",
    description:
      "Explore JavaScript functions, parameters, return values, and practical examples.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    date: "2026-09-03",
  },
  {
    id: 3,
    title: "A Beginner's Guide to Tailwind CSS",
    author: "Jane Smith",
    category: "CSS",
    description:
      "Discover how Tailwind CSS helps you create beautiful and responsive websites.",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
    date: "2026-09-05",
  },
  {
    id: 4,
    title: "Why TypeScript Matters",
    author: "Alex Johnson",
    category: "TypeScript",
    description:
      "Understand how TypeScript improves JavaScript development with static typing.",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    date: "2026-09-07",
  },
  {
    id: 5,
    title: "Building Your First Web Project",
    author: "Michael Brown",
    category: "Web Development",
    description:
      "Follow a simple roadmap to build and publish your first web development project.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "2026-09-10",
  },
];

const Blogspage = () => {
  return (
    <div>
      <h2>Blogs</h2>

      {blogsData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Blogspage;