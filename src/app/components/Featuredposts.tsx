import { FaRegClock } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L’intégral)",
      description: "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      image: "/images/featuredpost1.jpg",
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L’intégral)",
      description: "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      image: "/images/featuredpost2.jpg",
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L’intégral)",
      description: "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      image: "/images/featuredpost3.jpg",
    },
  ];

  return (
    <section className="md:py-16 py-96 md:mt-0 mt-96 md:pb-0 pb-96 bg-white">
      <div className="max-w-6xl mx-auto px-16 text-center">
        <h6 className="text-[#23A6F0] text-sm font-bold mb-2">Practice Advice</h6>
        <h2 className="text-[40px] font-bold text-[#252B42] mb-4">Featured Posts</h2>
        <p className="text-[#6a6969] text-base font-normal mb-20">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>

        <div className="grid md:grid-cols-3 grid-cols-1 h-[600px] w-full items-center">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white w-[330px] h-[600px] hover:shadow-xl transition"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-[380px] h-[300px]"
                />
                <h6 className="absolute top-3 left-3 rounded bg-[#E74040] text-[#FFFFFF] text-sm font-bold px-[10px] py-1">
                  NEW
                </h6>
              </div>

              <div className="p-6 text-left gap-2 w-full">
                <small className="text-[#737373] text-xs font-medium gap-4">
                 <span className="text-[#8EC2F2]" >Google</span> &nbsp; Trending &nbsp; New
                </small>
                <h4 className="text-xl font-medium text-[#252B42] my-3">{post.title}</h4>
                <p className="text-sm text-[#737373] font-medium mb-4">{post.description}</p>
                <div className="flex items-center justify-between text-[#737373] text-sm font-medium gap-4 mb-4 py-[15px]">
                  <div className="flex items-center gap-1 text-[#23A6F0]">
                  <FaRegClock /> <small className="text-[#737373]">{post.date}</small>
                  </div>
                  <div className="flex items-center gap-1 text-[#23856D]">
                  <AiOutlineStock /> <small className="text-[#737373]" >{post.comments}</small>
                  </div>
                </div>
                <h6 className="text-[#737373] text-sm font-bold flex items-center gap-1 cursor-pointer hover:underline">
                  Learn More <span className="text-[#23A6F0] font-thin text-lg"> &gt; </span>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
