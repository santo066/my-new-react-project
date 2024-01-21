import { useLoaderData } from "react-router-dom";
import Carousel from "../Shared/Carousel/Carousel";
import Gallery from "../Shared/Gallery/Gallery";
import Header from "../Shared/Header/Header";
import Services from "../Shared/Services/Services";
import Events from "../Shared/Events/Events";
import Footer from "../Shared/Footer/Footer";

export default function Home() {
    
    const datas=useLoaderData()
    //  console.log(datas)

    

    return (
        <div className="">
            <Header></Header>
            <Carousel></Carousel>
            <h2 className="text-5xl font-bold  text-center mt-20 mb-10">OUR <span className="text-blue-500">SERVICES</span></h2>
            <div className="grid justify-center">
                <Services></Services>
            </div>
            <h2 className="text-5xl font-bold  text-center pt-6 mb-10 mt-20">OUR <span className="text-blue-500">GALLERY</span></h2>
            <Gallery></Gallery>
            <h2 className="text-5xl font-bold  text-center pt-6 mb-10 mt-20">OUR <span className="text-blue-500">EVENTS</span></h2>
            
            <div className="grid text-center max-w-[1400px] mx-auto mb-20  sm:grid-cols-2 md:grid-cols-3 gap-10">
                
                {
                    // datas.map(data => <Events key={data._id} datass={data}></Events>)
                    datas.map(data=><Events key={data._id} datass={data}></Events>)
                }
            </div>
            <Footer></Footer>


        </div>
    )
}