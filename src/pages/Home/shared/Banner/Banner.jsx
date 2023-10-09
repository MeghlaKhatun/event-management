import Navbar from "../Navbar/Navbar";


const Banner = () => {
    return (
      
      
        <div className="w-full h-screen mb-8 md:mb-10 lg:mb-20 bg-no-repeat bg-cover" style={{backgroundImage: 'url(https://i.ibb.co/kqssdx2/Screenshot-2023-10-09-214115-11zon.png)',objectFit:"cover"}}>
          <Navbar></Navbar>
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"></h1>
            <p className="mb-5"></p>
          </div>
        </div>
      </div>
     
    );
};

export default Banner;