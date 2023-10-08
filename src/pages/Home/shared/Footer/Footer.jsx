import { FaFacebook,FaTwitter,FaYoutube,FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
      <footer className=" bg-gray-700 ">
        <div className="max-w-7xl mx-auto justify-center md:justify-between footer p-10 text-base-content">
            <nav>
                <header className="footer-title text-white text-[18px] md:text-xl">Services</header> 
                <a className="link link-hover text-white md:text-[16px]">Wedding</a> 
                <a className="link link-hover text-white md:text-[16px]">Engagement</a> 
                <a className="link link-hover text-white md:text-[16px]">Birthday </a> 
                <a className="link link-hover text-white md:text-[16px]">Retirement</a>
                <a className="link link-hover text-white md:text-[16px]">Anniversary</a>
                <a className="link link-hover text-white md:text-[16px]">Baby Shower</a>
            </nav> 
            <nav>
                <header className="footer-title text-white text-[18px] md:text-xl">Contact</header> 
                <a className="link link-hover text-white md:text-[16px]">Phone: +8801979843534</a> 
                <a className="link link-hover text-white md:text-[16px]">Email: rojoniKanto@gg.com</a> 
            </nav> 
            <nav>
                <header className="footer-title text-white text-[18px] md:text-xl">Social</header> 
                <div className="grid grid-flow-col gap-4">
                    <a href="#" className="text-2xl text-white"><FaTwitter></FaTwitter></a>
                    <a href="#" className="text-2xl text-white"><FaYoutube></FaYoutube></a>
                    <a href="#" className="text-2xl text-white"><FaFacebook></FaFacebook></a>
                    <a href="#" className="text-2xl text-white"><FaInstagram></FaInstagram></a>
                </div>
            </nav>
            
        </div>

         <p className="bg-black bg-opacity-50 text-[16px] text-white text-center p-6">© Copyright 2023 All Right Reserved </p>
     </footer>
    );
};

export default Footer;