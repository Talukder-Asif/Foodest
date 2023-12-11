import Btn from "../../Component/Btn";
import GradintText from "../../Component/GradintText";
import SubTitle from "../../Component/SubTitle";
import aboutImg from "/src/assets/AboutUs.png";
import tick from "/src/assets/tick.svg";
import vector1 from "/src/assets/Vector.png";
import vector2 from "/src/assets/Vector1.svg";
const About = () => {
  return (
    <div className="pb-20 max-w-7xl m-auto">
      <div className="hero md:min-h-[500px] max-w-7xl m-auto relative">
        <img className="absolute top-0 left-0 w-20" src={vector1} alt="" />
        <img
          className="absolute bottom-0 z-50 right-0 w-20"
          src={vector2}
          alt=""
        />

        <div className="hero-content flex-col-reverse md:flex-row">
          <div className="md:w-5/12 ">
            <img src={aboutImg} className="" />
          </div>
          <div className="md:w-7/12">
            <SubTitle Title={"About Us"}></SubTitle>
            <h1 className=" text-2xl mt-2 lg:text-4xl text-[#25292D] font-bold">
              We allways Provide <GradintText text={"Quality"}></GradintText>{" "}
              <br />
              Food for your
            </h1>
            <p className="py-6 font1 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Adipiscing non donec nibh rhoncus, diam, netus pulvinar. Mi
              elementum a enim, mauris. Cursus accumsan sed fames amet. Erat at
              eget id ornare vulputate adipiscing ut.
            </p>
            <div className="space-y-5">
              <div className="card md:card-side p-5 bg-base-100 shadow-xl rounded">
                <figure>
                  <img src={tick} alt="Movie" />
                </figure>
                <div className="md:pl-5">
                  <h2 className="text-lg text-[#25292D] font-bold">
                    Natural products for lovers of healthy food.
                  </h2>
                  <p className="text-[#666] text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Gravida consequat,
                  </p>
                </div>
              </div>
              <div className="card md:card-side p-5 bg-base-100 shadow-xl rounded">
                <figure>
                  <img src={tick} alt="Movie" />
                </figure>
                <div className="md:pl-5">
                  <h2 className="text-lg text-[#25292D] font-bold">
                    Natural products for lovers of healthy food.
                  </h2>
                  <p className="text-[#666] text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Gravida consequat,
                  </p>
                </div>
              </div>

              <div>
                <Btn btnName={"Order Now"}></Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
