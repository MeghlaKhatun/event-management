import Navbar from "../Navbar/Navbar";


const Banner = () => {
    return (
      
      
        <div className="w-full h-screen mb-20" style={{backgroundImage: 'url(https://i.ibb.co/drjqj6L/pexels-asad-photo-maldives-169198.jpg)',objectFit:"cover"}}>
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