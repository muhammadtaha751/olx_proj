import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import DashSec from "../components/DashSec"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"
import DetailCard from "../components/DetailCard"

export default function Dashboard() {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div>
                <ul className="ul">
                    <div className="categories">
                        <a href="#"><li>All categories</li></a>
                    </div>
                    <a href="#"><li>Mobile Phones</li></a>
                    <a href="#"><li>Cars</li></a>
                    <a href="#"><li>Motorcycles</li></a>
                    <a href="#"><li>House</li></a>
                    <a href="#"><li>TV-Video-Audio</li></a>
                    <a href="#"><li>Tablets</li></a>
                    <a href="#"><li>Land & Plots</li></a>
                </ul>
            </div>

            <div>
                <Slider />
            </div>

            <div>
                <DashSec />
            </div>

            <div >
                <h2>Cars</h2>
                <div className="CarsCard">
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                <DetailCard />
                </div>
            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
}