import Marquee from "react-fast-marquee";
import img5 from '../../../assets/img5.jpg'
import img6 from '../../../assets/img6.jpg'
import img7 from '../../../assets/img7.jpg'
import img8 from '../../../assets/img8.jpg'

export default function Gallery(){
    return(
        <div className="mb-20">
            <Marquee speed={200} direction="left">
                <img className="h-64 w-96 ml-5 shadow-2xl" src={img5} alt="" />
                <img className="h-64 w-96 ml-5 shadow-2xl" src={img6} alt="" />
                <img className="h-64 w-96 ml-5 shadow-2xl" src={img7} alt="" />
                <img className="h-64 w-96 ml-5 shadow-2xl" src={img8} alt="" />
            </Marquee>
        </div>
    )
}