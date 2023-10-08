import { useLoaderData } from "react-router-dom";
import Banner from "./shared/Banner/Banner";
import Card from "./shared/Card/Card";
import Decoration from "../Decoration/Decoration";
import Footer from "./shared/Footer/Footer";


const Home = () => {

    const cards=useLoaderData();

    return (
        <div>
            <Banner></Banner>

            {/* start cards section */}
            <div className=" max-w-7xl mx-auto md:mb-8 lg:mb-16 px-6 md:px-10 lg:px-0">
                <h2 className='text-center  bg-clip-text text-transparent  bg-gradient-to-r from-indigo-700 from-10% via-sky-700 via-30% to-emerald-700 to-90% decoration-wavy text-2xl md:text-3xl lg:text-5xl  font-extrabold italic mb-4 md:mb-8 lg:mb-12'>OUR SERVICES</h2>
                
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
                {
                    cards?.map(card=><Card key={card.id} card={card}></Card>)
                }
            </div>
            </div>

            {/* end cards section */}
            <Decoration></Decoration>
            <Footer></Footer>

        </div>
    );
};

export default Home;