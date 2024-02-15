import { Link} from "react-router-dom";

/* eslint-disable react/prop-types */
const Friend=({friend})=>{
 
  const {id, name,username,website,email} = friend;
  return (
    <div className="flex  flex-col items-center bg-white w-[500px] h-auto p-3 text-center">
        <p>ID: {id}</p>
       <h2>Name: { name}</h2>
       <p>Username: {username}</p>
       <p>Email: {email}</p>
        <Link to={`/friend/${id}`} className="underline">Wb: {website}</Link>
    </div>
  )
}

export default Friend
