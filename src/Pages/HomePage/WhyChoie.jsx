import GradintText from "../../Component/GradintText";
import SubTitle from "../../Component/SubTitle";
import aboutImg from "/src/assets/ChoiceUs.png";
import tick from "/src/assets/Group 20.svg";
import vector1 from "/src/assets/Vector2.svg";
import vector2 from "/src/assets/Vector 3.svg";
const WhyChoie = () => {
    return (
        <div className="pb-20 max-w-7xl m-auto">
      <div className="hero md:min-h-[500px] max-w-7xl m-auto relative">
        <div className="hero-content flex-col-reverse md:flex-row-reverse">
          <div className="md:w-5/12 relative">
            <img
              src={aboutImg}
              className=""
            />
            <img
              src={vector1}
              className=" absolute top-0 left-0 z-50"
            />
            <img
              src={vector2}
              className=" absolute bottom-0 right-0 z-50"
            />
            
            
          </div>
          <div className="md:w-7/12">
          <SubTitle Title={"Why Choose US"}></SubTitle>
            <h1 className=" text-2xl mt-2 lg:text-4xl text-[#25292D] font-bold">
            Why Choose US <GradintText text={"Foodest food"}></GradintText>{" "}
              <br />
              service Deliver
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
                  Our Product                  </h2>
                  <p className="text-[#666] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida consequat,</p>
                </div>
              </div>
              <div className="card md:card-side p-5 bg-base-100 shadow-xl rounded">
                <figure>
                  <img src={tick} alt="Movie" />
                </figure>
                <div className="md:pl-5">
                  <h2 className="text-lg text-[#25292D] font-bold">
                  Our Advantage                  </h2>
                  <p className="text-[#666] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida consequat,</p>
                </div>
              </div>
              <div className="card md:card-side p-5 bg-base-100 shadow-xl rounded">
                <figure>
                  <img src={tick} alt="Movie" />
                </figure>
                <div className="md:pl-5">
                  <h2 className="text-lg text-[#25292D] font-bold">
                  Service & Support                  </h2>
                  <p className="text-[#666] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida consequat,</p>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default WhyChoie;