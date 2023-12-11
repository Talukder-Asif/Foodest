import GradintText from "../../Component/GradintText";
import { PiHamburgerLight } from "react-icons/pi";
import arrow from "/src/assets/GradientArrow.svg"
import { GiFullPizza } from "react-icons/gi";
import { GiChickenOven } from "react-icons/gi";
import { RiCake3Line } from "react-icons/ri";
import { SiBuymeacoffee } from "react-icons/si";
import { TbSalad } from "react-icons/tb";


const Category = () => {
    return (
        <div className="max-w-7xl m-auto py-28">
            <div className="text-center px-3 space-y-3">
                <h3 className="text-4xl font-bold text-[#25292D]">Our Awesome <GradintText text={'Category'}></GradintText></h3>
                <p className="font1 md:w-[60%] m-auto">
                nisl scelerisque quisque eget. Malesuada arcu aliquam tempor pulvinar pulvinar ac lectus. Turpis vitae, euismod facilisis non lacus erat malesuada dolor dignissim.
                </p>
            </div>
            <div className="flex justify-center p-5 flex-wrap gap-3 md:gap-5">
                <div className="group py-5 p-1 md:py-10 w-32 md:w-40 shadow-sm hover:shadow-xl hover:scale-110 rounded-md relative">
                    <PiHamburgerLight className="bg-gradient-to-r from-[#fff7ec] to-[#fef0ef] group-hover:from-[#FFB23F] group-hover:to-[#f9685e] text-5xl md:text-6xl rounded-full p-2 text-[#fdaa5b] group-hover:text-white m-auto"></PiHamburgerLight>
                    <p className="text-lg md:text-xl font-bold text-[#25292D] text-center">Burger</p>
                    <img className="absolute -bottom-8 left-[25%] hidden group-hover:inline" src={arrow} alt="" />
                </div>
                <div className="group py-5 p-1 md:py-10 w-32 md:w-40 shadow-sm hover:shadow-xl hover:scale-110 rounded-md relative">
                    <GiFullPizza className="bg-gradient-to-r from-[#fff7ec] to-[#fef0ef] group-hover:from-[#FFB23F] group-hover:to-[#f9685e] text-5xl md:text-6xl rounded-full p-2 text-[#fdaa5b] group-hover:text-white m-auto"></GiFullPizza>
                    <p className="text-lg md:text-xl font-bold text-[#25292D] text-center">Pizza</p>
                    <img className="absolute -bottom-8 left-[25%] hidden group-hover:inline" src={arrow} alt="" />
                </div>
                <div className="group py-5 p-1 md:py-10 w-32 md:w-40 shadow-sm hover:shadow-xl hover:scale-110 rounded-md relative">
                    <GiChickenOven className="bg-gradient-to-r from-[#fff7ec] to-[#fef0ef] group-hover:from-[#FFB23F] group-hover:to-[#f9685e] text-5xl md:text-6xl rounded-full p-2 text-[#fdaa5b] group-hover:text-white m-auto"></GiChickenOven>
                    <p className="text-lg md:text-xl font-bold text-[#25292D] text-center">Fried Chicken</p>
                    <img className="absolute -bottom-8 left-[25%] hidden group-hover:inline" src={arrow} alt="" />
                </div>
                <div className="group py-5 p-1 md:py-10 w-32 md:w-40 shadow-sm hover:shadow-xl hover:scale-110 rounded-md relative">
                    <RiCake3Line className="bg-gradient-to-r from-[#fff7ec] to-[#fef0ef] group-hover:from-[#FFB23F] group-hover:to-[#f9685e] text-5xl md:text-6xl rounded-full p-2 text-[#fdaa5b] group-hover:text-white m-auto"></RiCake3Line>
                    <p className="text-lg md:text-xl font-bold text-[#25292D] text-center">Desserts</p>
                    <img className="absolute -bottom-8 left-[25%] hidden group-hover:inline" src={arrow} alt="" />
                </div>
                <div className="group py-5 p-1 md:py-10 w-32 md:w-40 shadow-sm hover:shadow-xl hover:scale-110 rounded-md relative">
                    <SiBuymeacoffee className="bg-gradient-to-r from-[#fff7ec] to-[#fef0ef] group-hover:from-[#FFB23F] group-hover:to-[#f9685e] text-5xl md:text-6xl rounded-full p-2 text-[#fdaa5b] group-hover:text-white m-auto"></SiBuymeacoffee>
                    <p className="text-lg md:text-xl font-bold text-[#25292D] text-center">Drinks</p>
                    <img className="absolute -bottom-8 left-[25%] hidden group-hover:inline" src={arrow} alt="" />
                </div>
                <div className="group py-5 p-1 md:py-10 w-32 md:w-40 shadow-sm hover:shadow-xl hover:scale-110 rounded-md relative">
                    <TbSalad className="bg-gradient-to-r from-[#fff7ec] to-[#fef0ef] group-hover:from-[#FFB23F] group-hover:to-[#f9685e] text-5xl md:text-6xl rounded-full p-2 text-[#fdaa5b] group-hover:text-white m-auto"></TbSalad>
                    <p className="text-lg md:text-xl font-bold text-[#25292D] text-center">Salad</p>
                    <img className="absolute -bottom-8 left-[25%] hidden group-hover:inline" src={arrow} alt="" />
                </div>



            </div>
        </div>
    );
};

export default Category;