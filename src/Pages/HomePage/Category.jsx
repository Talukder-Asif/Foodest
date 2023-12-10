import GradintText from "../../Component/GradintText";
import { PiHamburgerLight } from "react-icons/pi";
import arrow from "/src/assets/GradientArrow.svg"


const Category = () => {
    return (
        <div className="max-w-7xl m-auto py-28">
            <div className="text-center space-y-3">
                <h3 className="text-4xl font-bold text-[#25292D]">Our Awesome <GradintText text={'Category'}></GradintText></h3>
                <p className="font1 w-[60%] m-auto">
                nisl scelerisque quisque eget. Malesuada arcu aliquam tempor pulvinar pulvinar ac lectus. Turpis vitae, euismod facilisis non lacus erat malesuada dolor dignissim.
                </p>
            </div>
            <div className="flex justify-center p-5 flex-wrap gap-5">
                <div className="group p-10 shadow-sm hover:shadow-xl hover:scale-110 rounded-md relative">
                    <PiHamburgerLight className="bg-gradient-to-r from-[#fff7ec] to-[#fef0ef] group-hover:from-[#FFB23F] group-hover:to-[#f9685e] text-6xl rounded-full p-2 text-[#fdaa5b] group-hover:text-white"></PiHamburgerLight>
                    <p className="text-xl font-bold text-[#25292D]">Burger</p>
                    <img className="absolute -bottom-9 hidden group-hover:inline" src={arrow} alt="" />
                </div>

                
                <div className="group p-10 shadow-sm hover:shadow-xl hover:scale-110 rounded-md relative">
                    <PiHamburgerLight className="bg-gradient-to-r from-[#fff7ec] to-[#fef0ef] group-hover:from-[#FFB23F] group-hover:to-[#f9685e] text-6xl rounded-full p-2 text-[#fdaa5b] group-hover:text-white"></PiHamburgerLight>
                    <p className="text-xl font-bold text-[#25292D]">Burger</p>
                    <img className="absolute -bottom-9 hidden group-hover:inline" src={arrow} alt="" />
                </div>
                <div className="group p-10 shadow-sm hover:shadow-xl hover:scale-110 rounded-md relative">
                    <PiHamburgerLight className="bg-gradient-to-r from-[#fff7ec] to-[#fef0ef] group-hover:from-[#FFB23F] group-hover:to-[#f9685e] text-6xl rounded-full p-2 text-[#fdaa5b] group-hover:text-white"></PiHamburgerLight>
                    <p className="text-xl font-bold text-[#25292D]">Burger</p>
                    <img className="absolute -bottom-9 hidden group-hover:inline" src={arrow} alt="" />
                </div>
                <div className="group p-10 shadow-sm hover:shadow-xl hover:scale-110 rounded-md relative">
                    <PiHamburgerLight className="bg-gradient-to-r from-[#fff7ec] to-[#fef0ef] group-hover:from-[#FFB23F] group-hover:to-[#f9685e] text-6xl rounded-full p-2 text-[#fdaa5b] group-hover:text-white"></PiHamburgerLight>
                    <p className="text-xl font-bold text-[#25292D]">Burger</p>
                    <img className="absolute -bottom-9 hidden group-hover:inline" src={arrow} alt="" />
                </div>
                <div className="group p-10 shadow-sm hover:shadow-xl hover:scale-110 rounded-md relative">
                    <PiHamburgerLight className="bg-gradient-to-r from-[#fff7ec] to-[#fef0ef] group-hover:from-[#FFB23F] group-hover:to-[#f9685e] text-6xl rounded-full p-2 text-[#fdaa5b] group-hover:text-white"></PiHamburgerLight>
                    <p className="text-xl font-bold text-[#25292D]">Burger</p>
                    <img className="absolute -bottom-9 hidden group-hover:inline" src={arrow} alt="" />
                </div>
                <div className="group p-10 shadow-sm hover:shadow-xl hover:scale-110 rounded-md relative">
                    <PiHamburgerLight className="bg-gradient-to-r from-[#fff7ec] to-[#fef0ef] group-hover:from-[#FFB23F] group-hover:to-[#f9685e] text-6xl rounded-full p-2 text-[#fdaa5b] group-hover:text-white"></PiHamburgerLight>
                    <p className="text-xl font-bold text-[#25292D]">Burger</p>
                    <img className="absolute -bottom-9 hidden group-hover:inline" src={arrow} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Category;