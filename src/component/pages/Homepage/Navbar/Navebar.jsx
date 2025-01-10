import { useState } from "react";
import navimg from "../../../Assets/images/nav bar images/headerlogo.png";
import LanguageIcon from '@mui/icons-material/Language';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import "./Header/Navbar.css"
import LanguageDropdown from "../../../LanguageDropdown/LanguageDropdown";
import arrow from "../../../Assets/images/nav bar images/Vector.png";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home Page");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };



  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <nav className=" fixed top-0 left-0 w-full z-50 mt-2 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile Menu Button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className=" relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} // Toggle menu state
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#">
                <img src={navimg} className="h-20 w-auto" alt="Your Company" />
              </a>
            </div>

            {/* Desktop Menu Links */}
            <div className="flex-1 flex justify-center items-center space-x-4 hidden sm:flex ps-5">
            <a
  href="#home"
  onClick={() => handleTabClick("Home")}
  className={`rounded-md text-sm font-medium transition duration-300 ease-in-out ${
    activeTab === "Home" ? "text-[#FB773F]" : "text-white"
  }`}
>
  <button
    className={`relative font-semibold text-lg py-2 px-2 rounded-lg transition-all duration-300 focus:outline-none ${
      activeTab === "Home"
        ? "text-[#FB773F] border-b-2 border-solid border-[#FB773F]"  
        : "text-white hover:text-[#FB773F]"
    }`}
  >
    Home
  </button>
</a>

              <a
                href="#About"
                onClick={() => handleTabClick("About")}
                className={`rounded-md   text-sm font-medium transition duration-300 ease-in-out text-decoration-none ${
                  activeTab === "About"
                    ?  "text-[#FB773F] border-b-2 border-solid border-[#FB773F]" : "text-white hover:text-[#FB773F]"
                   
                }`}
              >
            <button className=" relative font-semibold text-lg py-2 px-2  text-white rounded-lg transition-all duration-300  focus:outline-none">  About</button>
              </a>
              <a
                href="#Services"
                onClick={() => handleTabClick("Services")}
                className={`rounded-md  py-2 text-sm font-medium transition duration-300 ease-in-out text-decoration-none ${
                  activeTab === "Services"
                    ? "text-[#FB773F] border-b-2 border-solid border-[#FB773F]"
                    : "text-white hover:text-[#FB773F]"
                }`}
              >
                 <button className=" relative font-semibold text-lg py-2 px-2  text-white rounded-lg transition-all duration-300 focus:outline-none">Services </button>
              </a>
              <a
                href="#Portfolio"
                onClick={() => handleTabClick("Portfolio")}
                className={`rounded-md  text-sm font-medium transition duration-300 ease-in-out text-decoration-none ${
                  activeTab === "Portfolio"
                    ? " text-[#FB773F] border-b-2 border-solid border-[#FB773F]"
                    : "text-white hover:text-[#FB773F] "
                }`}
              >
              <button className=" relative font-semibold text-lg py-2 px-2  text-white rounded-lg transition-all duration-300  focus:outline-none">  Portfolio</button>
              </a>
              <a
                href="#Testimonials"
                onClick={() => handleTabClick("Testimonials")}
                className={`rounded-md  text-sm font-medium transition duration-300 ease-in-out text-decoration-none ${
                  activeTab === "Testimonials"
                    ? "text-[#FB773F] border-b-2 border-solid border-[#FB773F]"
                    : "text-white hover:text-[#FB773F]"
                }`}
              >
             <button className=" relative font-semibold text-lg py-2 px-2  text-white rounded-lg transition-all duration-300  focus:outline-none">   Testimonials</button>
              </a>
              <a
                href="#Blog"
                onClick={() => handleTabClick("Blog")}
                className={`rounded-md  text-sm font-medium transition duration-300 ease-in-out text-decoration-none ${
                  activeTab === "Blog"
                    ? " text-[#FB773F] border-b-2 border-solid border-[#FB773F]"
                    : "text-white hover:text-[#FB773F]"
                }`}
              >
            <button className=" relative font-semibold text-lg py-2 px-2  text-white rounded-lg transition-all duration-300  focus:outline-none">    Blog</button>
              </a>
            </div>

            {/* Notification Icon */}
            <div className="flex items-center space-x-4">
              {/* <span className=" text-white hover:text-white">
              <LanguageIcon className="me-3" style={{cursor:"pointer"}}    onClick={handleClick}     />
              </span> */}
              <button className="text-white border-2 border-solid border-[#FB773F] px-7 py-2 rounded"> Contact Us</button>
              <button className="rounded text-white flex items-center text-white border-2 border-solid border-[#FB773F] px-10 py-2 "><img className="w-5 pe-2" src={arrow} alt="" />  Eng</button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
            <a
                href="#home"
                onClick={() => handleTabClick("home")}
                className={` block rounded-md px-3 py-2 text-sm font-medium transition duration-300 ease-in-out text-decoration-none ${
                  activeTab === "home"
                    ? "text-[#FB773F] border-b-2 border-solid border-[#FB773F]"
                    : "text-white hover:text-[#FB773F]"
                }`}
              >
               home
              </a>
              <a
                href="#About"
                onClick={() => handleTabClick("About")}
                className={`block rounded-md px-3 py-2 text-base font-medium transition duration-300 ease-in-out text-decoration-none ${
                  activeTab === "About"
                    ? " text-[#FB773F] border-b-2 border-solid border-[#FB773F]"
                    : "text-white hover:text-[#FB773F]"
                }`}
              >
               About
              </a>
              <a
                href="#Services"
                onClick={() => handleTabClick("Services")}
                className={`block rounded-md px-3 py-2 text-base font-medium transition duration-300 ease-in-out text-decoration-none ${
                  activeTab === "Services"
                    ? "text-[#FB773F] border-b-2 border-solid border-[#FB773F]"
                    : "text-white hover:text-[#FB773F]"
                }`}
              >
               Services
              </a>
              <a
                href="#Portfolio"
                onClick={() => handleTabClick("Portfolio")}
                className={`block rounded-md px-3 py-2 text-base font-medium transition duration-300 ease-in-out text-decoration-none ${
                  activeTab === "Portfolio"
                    ? "text-[#FB773F] border-b-2 border-solid border-[#FB773F]"
                    : "text-white hover:text-[#FB773F]"
                }`}
              >
              Portfolio
              </a>
              <a
                href="#Testimonials"
                onClick={() => handleTabClick("Testimonials")}
                className={`block rounded-md px-3 py-2 text-base font-medium transition duration-300 ease-in-out text-decoration-none ${
                  activeTab === "Testimonials"
                    ? "text-[#FB773F] border-b-2 border-solid border-[#FB773F]"
                    : "text-white hover:text-[#FB773F]"
                }`}
              >
               Testimonials
              </a>
              <a
                href="#Blog"
                onClick={() => handleTabClick("Blog")}
                className={`block rounded-md px-3 py-2 text-base font-medium transition duration-300 ease-in-out text-decoration-none ${
                  activeTab === "Blog"
                    ? "text-[#FB773F] border-b-2 border-solid border-[#FB773F]"
                    : "text-white hover:text-[#FB773F]"
                }`}
              >
            Blog
              </a>
            </div>
          </div>
        )}
      </nav>
      <LanguageDropdown open={open}  handleClose={handleClose}anchorEl={anchorEl} />
    </>
  );
};

export default Navbar;
