import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'
import img5 from '../../../assets/img5.jpg'
import img6 from '../../../assets/img6.jpg'
import img7 from '../../../assets/img7.jpg'
import img8 from '../../../assets/img8.jpg'
import img9 from '../../../assets/img9.jpg'
import img10 from '../../../assets/img10.jpg'
import img11 from '../../../assets/img11.jpg'
import img12 from '../../../assets/img12.jpg'
import { Link } from 'react-router-dom'



export default function Events({ datass }) {

    const { image_url, title, details, _id } = datass;
    console.log(title)

    return (
        <div className="">

            {/* card 1 */}
            <div className="card  card-compact w-96 mx-auto h-80 bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p> */}
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    {
                        details.length > 100
                            ? <p>{details.slice(0, 100)}<Link to={`/event/${_id}`} className="text-blue-500 font-bold"> Read More....</Link></p>
                            : <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    )
}