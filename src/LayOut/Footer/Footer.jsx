import logo from "/src/assets/Logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#fff2f4] rounded-lg shadow dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="space-y-2">
          <img className="max-w-[200px] m-auto" src={logo} alt="" />
          <p className=" font1 m-auto text-center text-[#666] font-medium md:max-w-[50%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            conseq venenatis dolor dolor integer Quam ut tellus .
          </p>

          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 py-5 gap-5">
            <li>
              <Link>
                <button
                  type="button"
                  className="bg-white border hover:border-transparent border-[#F86161] hover:bg-gradient-to-r hover:from-[#F86161] hover:to-[#FFB23F] text-[#F86161] hover:text-white p-3 text-sm md:text-3xl rounded-lg"
                >
                  <FaFacebookF />
                </button>
              </Link>
            </li>
            <li>
              <Link>
                <button
                  type="button"
                  className="bg-white border hover:border-transparent border-[#F86161] hover:bg-gradient-to-r hover:from-[#F86161] hover:to-[#FFB23F] text-[#F86161] hover:text-white p-3 text-sm md:text-3xl rounded-lg"
                >
                  <FaInstagram />
                </button>
              </Link>
            </li>
            <li>
              <Link>
                <button
                  type="button"
                  className="bg-white border hover:border-transparent border-[#F86161] hover:bg-gradient-to-r hover:from-[#F86161] hover:to-[#FFB23F] text-[#F86161] hover:text-white p-3 text-sm md:text-3xl rounded-lg"
                >
                  <FaTwitter />
                </button>
              </Link>
            </li>
            <li>
              <Link>
                <button
                  type="button"
                  className="bg-white border hover:border-transparent border-[#F86161] hover:bg-gradient-to-r hover:from-[#F86161] hover:to-[#FFB23F] text-[#F86161] hover:text-white p-3 text-sm md:text-3xl rounded-lg"
                >
                  <FaPinterestP />
                </button>
              </Link>
            </li>
          </ul>

          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-[#fba9aa] sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {" "}
          © All Rights Reserved - 2024 -{" "}
          <a
            href="https://github.com/Talukder-Asif"
            className="hover:underline"
          >
            Asif Talukder
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
