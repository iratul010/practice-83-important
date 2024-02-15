import moment from "moment";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Header = () => {
  //all time stay hold time on our web page
  const [times, setTimes] = useState(moment().format("MMMM, Do,  YYYY, h:mm:ss a"));
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimes(moment().format("MMMM, Do,  YYYY, h:mm:ss a"));
    }, 1000);

    return () => clearInterval(intervalId);  
  }, []);
  return (
    <div className="flex flex-col  justify-center p-2">
      <Marquee pauseOnHover={true} gradientColor={'white'}>
        <h2 className="text-green-200 font-poppins font-bold mr-3">Header</h2>
      </Marquee>
    <div className="block h-5">  {times}</div>
    </div>
  );
};

export default Header;
