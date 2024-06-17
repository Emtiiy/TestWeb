import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best in FAR, AFAR",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Michelle Tumamao, CPA",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Learning"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Best in Muay thai, KickBoxing, Jiu jitsu",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Christian Tamis, CPA",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["MMA"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Best in Rizz",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Eman Ting, POGI",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Rizzing"],
    publishDate: "2025",
  },
];
export default blogData;
