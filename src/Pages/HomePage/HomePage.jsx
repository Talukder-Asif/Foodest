import About from "./About";
import Banner from "./Banner";
import Category from "./Category";
import Chefs from "./Chefs";
import Discount from "./Discount";
import PopularProduct from "./PopularProduct";
import WhyChoie from "./WhyChoie";

const HomePage = () => {
    return (
        <div>
        <Banner></Banner>
        <Category></Category>
        <About></About>
        <WhyChoie></WhyChoie>
        <PopularProduct></PopularProduct>
        <Discount></Discount>
        <Chefs></Chefs>
        </div>
    );
};

export default HomePage;