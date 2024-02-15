import { useLoaderData } from "react-router-dom";
import Friend from "../components/Friend";
import { Helmet } from "react-helmet-async";

const Friends = () => {
  const friends = useLoaderData();

  return (
    <div className="text-center p-4   bg-green-200">
      <Helmet><title>Friend</title></Helmet>
      <h1>FRIENDS PORTAL</h1>
      <div className="flex flex-col gap-5   bg-slate-400">
        {friends.map(fd => {
          return (
            <div key={fd.id} className="flex justify-center items-center p-3">
               
              <Friend key={fd.id} friend={fd} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
