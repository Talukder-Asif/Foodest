import GradintText from "./GradintText";

// eslint-disable-next-line react/prop-types
const SubTitle = ({Title}) => {
    return (
        <div className='font2 text-black text-xl bg-gradient-to-r from-[#fff7ec] to-[#fef0ef] inline-block p-2'>
            <GradintText text={Title} ></GradintText>
        </div>
    );
};

export default SubTitle;