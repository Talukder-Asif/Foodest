/* eslint-disable react/prop-types */

const GradintText = ({text}) => {
    return (
        <span className=" bg-gradient-to-r from-[#ffad42] to-[#ff7060] text-transparent bg-clip-text ">
            {text}
        </span>
    );
};

export default GradintText;