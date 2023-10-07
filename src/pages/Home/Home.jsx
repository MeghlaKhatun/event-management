import Banner from "./shared/Banner/Banner";
import Navbar from "./shared/Navbar/Navbar";


const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Banner></Banner>
            <h2>This is home</h2>
        </div>
    );
};

export default Home;