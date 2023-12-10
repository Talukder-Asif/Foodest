import Btn from "../../Component/Btn";
import GradintText from "../../Component/GradintText";
import bannerImg from "/src/assets/hero image 1.png"
import letsGo from "/src/assets/letsGo.svg"
const Banner = () => {
  return (
    <div className="bg-gradient-to-t to-[#ffffff] from-[#fff2f4]">
      <div className="hero md:min-h-[500px] max-w-7xl m-auto relative">
        <div className="hero-content flex-col-reverse md:flex-row-reverse">
          <div className="md:w-[400px] ">
          <img
            src={bannerImg}
            className=" max-h-64 -mb-4 md:mb-0 md:max-h-96 md:absolute bottom-0 right-5 lg:right-32"
          />
          </div>
          <div className="">
            <h1 className=" text-4xl lg:text-6xl text-[#25292D] font-bold"> <GradintText text={"Laughter"}></GradintText> is Brightest <br />Where food is best.</h1>
            <p className="py-6 md:max-w-[60%] font1 font-medium">
            We welcome you to a delicious feast of exquisite dishes in Artichaut.With a wide range of world cuisines .
            </p>
            <div className=" flex gap-5">
            <Btn btnName={'Order Now'}></Btn>
            <button className="flex gap-3 items-center font-semibold"><img className="w-10 md:w-12" src={letsGo} alt="" />How It Work</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
