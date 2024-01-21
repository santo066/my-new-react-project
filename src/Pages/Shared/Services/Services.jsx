
import { FaLocationDot, FaAddressCard, FaMusic } from "react-icons/fa6";
import { MdOutlineNoFood } from "react-icons/md";

import { FaPhotoVideo } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";


export default function Services() {
    return (
        <div className="grid md:grid-cols-3 gap-16">

            {/* card 1 */}
            <div className="card w-96 bg-blue-200 text-center shadow-xl">
                <FaLocationDot className="w-24 h-12 mx-auto mt-5 text-blue-500"></FaLocationDot>
                <div className="card-body">
                    <h2 className=" mx-auto text-2xl font-semibold">Venue Selection</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,x</p>

                    {/* <div className="card-actions justify-center ">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
                </div>
            </div>
            {/* card 2 */}
            <div className="card w-96 bg-blue-200 text-center shadow-xl">
                <FaAddressCard className="w-24 h-12 mx-auto mt-5 text-blue-500"></FaAddressCard>
                <div className="card-body">
                    <h2 className=" mx-auto text-2xl font-semibold">Invitation Card</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,x</p>

                    {/* <div className="card-actions justify-center ">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
                </div>
            </div>
            {/* card 3 */}
            <div className="card w-96 bg-blue-200 text-center shadow-xl">
                <FaMusic className="w-24 h-12 mx-auto mt-5 text-blue-500"></FaMusic>
                <div className="card-body">
                    <h2 className=" mx-auto text-2xl font-semibold">Entertainment</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,x</p>

                    {/* <div className="card-actions justify-center ">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
                </div>
            </div>
            {/* card 4 */}
            <div className="card w-96 bg-blue-200 text-center shadow-xl">
                <IoFastFoodSharp className="w-24 h-12 mx-auto mt-5 text-blue-500"></IoFastFoodSharp>
                <div className="card-body">
                    <h2 className=" mx-auto text-2xl font-semibold">Food And Drink</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,x</p>

                    {/* <div className="card-actions justify-center ">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
                </div>
            </div>
            {/* card 5 */}
            <div className="card w-96 bg-blue-200 text-center shadow-xl">
                <FaPhotoVideo className="w-24 h-12 mx-auto mt-5 text-blue-500"></FaPhotoVideo>
                <div className="card-body">
                    <h2 className=" mx-auto text-2xl font-semibold">Photos And Video</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,x</p>

                    {/* <div className="card-actions justify-center ">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
                </div>
            </div>
            {/* card 6 */}
            <div className="card w-96 bg-blue-200 text-center shadow-xl">
                <div className="indicator">
                    <span className="indicator-item badge badge-primary">new</span>
                </div>
                <MdOutlineNoFood className="w-24 h-12 mx-auto mt-5 text-blue-500"></MdOutlineNoFood>
                <div className="card-body">
                    <h2 className=" mx-auto text-2xl font-semibold">Coustom Food</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,x</p>

                    {/* <div className="card-actions justify-center ">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
                </div>
            </div>
        </div>
    )
}