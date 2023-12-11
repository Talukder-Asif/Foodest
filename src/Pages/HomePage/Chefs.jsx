import GradintText from "../../Component/GradintText";
import SubTitle from "../../Component/SubTitle";
import chef1 from "/src/assets/SeekPng 1.png";
import chef2 from "/src/assets/pngegg2.png";
import chef3 from "/src/assets/pngegg3.png";
import chef4 from "/src/assets/pngegg4.png";
import Btn from "../../Component/Btn";
import { RiAddFill } from "react-icons/ri";

const Chefs = () => {
  return (
    <div className=" py-20">
      <div className="max-w-7xl m-auto text-center space-y-2 px-3">
        <SubTitle Title={"Team member"}></SubTitle>
        <h2 className="text-4xl text-[#25292d] font-bold">
          Meet Our Experte <GradintText text={"Chefs"}></GradintText>
        </h2>
        <p className=" font1 m-auto font-medium md:max-w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          conseq venenatis dolor dolor integer Quam ut tellus .
        </p>
      </div>

      <div className="max-w-7xl m-auto px-3 text-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="relative p-4 group hover:shadow-lg">
          <img className="m-auto h-80" src={chef1} alt="" />
          <div className=" bg-[#ffffff9e] p-4 w-full absolute bottom-10 hidden group-hover:block ">
            <div className=" relative text-left">
              <h3 className="text-[#25292D] text-xl font-bold">
                Mithcel Starc
              </h3>
              <p className="text-[#25292D] font-bold">Food Chef</p>
              <div className="absolute bottom-0 right-0">
                <Btn btnName={<RiAddFill />}></Btn>
              </div>
            </div>
          </div>
        </div>
        <div className="relative p-4 group hover:shadow-lg">
          <img className="m-auto h-80" src={chef2} alt="" />
          <div className=" bg-[#ffffff9e] p-4 w-full absolute bottom-10 hidden group-hover:block ">
            <div className=" relative text-left">
              <h3 className="text-[#25292D] text-xl font-bold">
                Mithcel Starc
              </h3>
              <p className="text-[#25292D] font-bold">Food Chef</p>
              <div className="absolute bottom-0 right-0">
                <Btn btnName={<RiAddFill />}></Btn>
              </div>
            </div>
          </div>
        </div>
        <div className="relative p-4 group hover:shadow-lg">
          <img className="m-auto h-80" src={chef3} alt="" />
          <div className=" bg-[#ffffff9e] p-4 w-full absolute bottom-10 hidden group-hover:block ">
            <div className=" relative text-left">
              <h3 className="text-[#25292D] text-xl font-bold">
                Mithcel Starc
              </h3>
              <p className="text-[#25292D] font-bold">Food Chef</p>
              <div className="absolute bottom-0 right-0">
                <Btn btnName={<RiAddFill />}></Btn>
              </div>
            </div>
          </div>
        </div>
        <div className="relative p-4 group hover:shadow-lg">
          <img className="m-auto h-80" src={chef4} alt="" />
          <div className=" bg-[#ffffff9e] p-4 w-full absolute bottom-10 hidden group-hover:block ">
            <div className=" relative text-left">
              <h3 className="text-[#25292D] text-xl font-bold">
                Mithcel Starc
              </h3>
              <p className="text-[#25292D] font-bold">Food Chef</p>
              <div className="absolute bottom-0 right-0">
                <Btn btnName={<RiAddFill />}></Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
