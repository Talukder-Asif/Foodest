import Btn from "../../Component/Btn";
import GradintText from "../../Component/GradintText";
import SubTitle from "../../Component/SubTitle";
import aboutImg from "/src/assets/Dish.png";

const Discount = () => {
  return (
    <div className="pb-20 pt-10 max-w-7xl m-auto">
      <div className="hero md:min-h-[500px] max-w-7xl m-auto relative">
        <div className="hero-content flex-col-reverse md:flex-row-reverse">
          <div className="md:w-5/12 ">
            <img src={aboutImg} className="" />
          </div>
          <div className="md:w-7/12">
            <SubTitle Title={"Discount"}></SubTitle>
            <h1 className=" text-2xl mt-2 lg:text-4xl text-[#25292D] font-bold">
              Big Deals of the Week<GradintText text={"Week"}></GradintText>
            </h1>
            <p className="py-6 font1 md:max-w-[60%] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              conseq venenatis dolor dolor integer Quam ut tellus.
            </p>

            <div>
              {/* Its static but I can make it dynamic */}
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col text-[#f86161]">
                  <span className="countdown font2 text-[#25292d] text-5xl">
                    <span style={{ "--value": 15 }}></span>
                  </span>
                  days
                </div>
                <div className="flex text-[#f86161] flex-col">
                  <span className="countdown text-[#25292d] font2 text-5xl">
                    <span style={{ "--value": 10 }}></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col text-[#f86161]">
                  <span className="countdown text-[#25292d] font2 text-5xl">
                    <span style={{ "--value": 24 }}></span>
                  </span>
                  min
                </div>
              </div>
            </div>

            <div className="mt-5">
              <Btn btnName={"Order Now"}></Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
