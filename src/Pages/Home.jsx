import  { useState } from "react";
import { Helmet } from "react-helmet-async";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Home = () => {
  const initialNews = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;
  
  const [showFullNews, setShowFullNews] = useState(false); // State to track whether to show full news or not

  const handleReadMore = () => {
    setShowFullNews(true); // Set showFullNews to true to display full news
  };

  const handleReadLess = () => {
    setShowFullNews(false); // Set showFullNews to false to display truncated news
  };

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <h2>This is Home</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="border bg-red-200 text-gray-500 text-center capitalize">
          left side
        </div>
        <div className="md:col-span-3 text-center border">
          <Marquee
            direction="left"
            speed="50"
            loop="2"
            autoFill={true}
            className="text-white"
          >
            <div>
              একটি কলব্যাক ফাংশন যা একবার মার্কি মাউন্ট করা শেষ হলে আহ্বান করা
              হয়। প্রয়োজনে পৃষ্ঠার আকার পুনরায় গণনা করতে এটি ব্যবহার করা যেতে
              পারে।
            </div>
          </Marquee>
          <div className="bg-white h-10 my-5 py-2">MARGIN-PRACTICE</div>
          <div>
            {showFullNews || initialNews.length <= 200 ? (
              // Display full news or if news length is less than or equal to 200 characters
              <>
                <p>{initialNews}</p>
                {showFullNews && <button className="btn bg-slate-200 text-xl hover:bg-slate-400 hover:text-gray-700 text-black font-bold" onClick={handleReadLess}>   Read Less</button>}
              </>
            ) : (
              // Display truncated news with "Read More" link if news length is greater than 200 characters and showFullNews is false
              <div className="inline">
                <p>{initialNews.substring(0, 200)}
                <Link className="text-blue-500" onClick={handleReadMore}> Read More...</Link></p>
              </div>
            )}
          </div>
        </div>
        <div className="border bg-red-200 text-gray-500 text-center capitalize flex flex-col gap-3 mb-3 rounded-sm justify-center">
          <div className="m-2 bg-slate-500 h-36 text-center text-white p-10 rounded-s-md">
            1
          </div>
          <div className="m-2 bg-slate-500 h-36 text-center text-white p-10 rounded-lg">
            2
          </div>
          <div className="m-2 bg-slate-500 h-36 text-center text-white p-10 rounded-box">
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
