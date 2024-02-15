import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getData, submitData } from "../utility/storageData";
const FriendWebPage = () => {
  const { id } = useParams();
  const ID = parseInt(id);

  console.log("ID", ID);
  console.log(getData());
  const details = useLoaderData();
  const { company, name, email } = details;
  function handleSubmit() {
    submitData(ID);
    toast("HLW I AM CLICKED");
  }
  return (
    <div className=" bg-black    text-center  h-[100px] ">
      <h2 className="text-red-400">Friend Details</h2>
      <div className=" w-[200px] h-[100px] text-center flex flex-col justify-center text-green-600">
        <h2>{company.name}</h2>
        <h2>{name}</h2>
        <p>{email}</p>
        <button className="btn bg-green-500 text-white" onClick={handleSubmit}>
          Button
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FriendWebPage;
