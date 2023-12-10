/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Btn = ({url, btnName}) => {
  return (
    <Link to={url}>
        <button
      type="button"
      className="bg-gradient-to-r from-[#FFB23F] to-[#F86161] hover:from-[#F86161] hover:to-[#FFB23F] text-white px-3 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-lg "
    >
      {btnName}
    </button>
    </Link>
  );
};

export default Btn;
