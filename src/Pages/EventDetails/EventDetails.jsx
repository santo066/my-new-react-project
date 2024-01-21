import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";

export default function EventDetails() {

    const { id } = useParams();
    const events = useLoaderData();
    console.log(events, id);
    const event = events.find(event => event._id == id)
    console.log(event)
    const { image_url, details, title } = event




    return (
        <div>
            <Header></Header>
            <div className="  mx-auto max-w-[1400px] mt-4 mr-7">
                <h2 className="card-title text-4xl font-bold">{title}</h2>

            </div>
            <div className="grid grid-cols-3 max-w-[1400px] p-8 gap-6 mx-auto">
                <div className="col-span-2 h-[500px] border-8">
                    <img className="w-full h-full" src={image_url} alt="" />
                </div>
                <div className="col-span-1 border-4 p-3">
                    <h1 className="text-2xl mb-3 font-semibold text-center">view details</h1>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    )
}