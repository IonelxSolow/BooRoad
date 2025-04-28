import { useState } from "react";
import { useGlobal } from "../contexts/GlobalContext"
import CardUserDetails from "../components/CardUserDetails";
import Carousel from "react-bootstrap/Carousel";

export default function Details() {
    const [viweDetails, setviweDetails] = useState(false);
    const [index, setIndex] = useState(0);
    const { currentTrip } = useGlobal();

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <h1 className="text-center">{currentTrip.destinazione}</h1>
            <div className="btn btn-primary client_details " onClick={() => setviweDetails(!viweDetails)}>Details</div>
            {viweDetails && <CardUserDetails id={3} onClick={() => setviweDetails(!viweDetails)} />}

            <div className="carousel_box container  ">
                <Carousel className="rounded" activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item className="rounded-3">
                        <img src={`/images${currentTrip.immagini[0]}`} className="d-block w-100 rounded caroulsel_img" alt="First slide" />

                    </Carousel.Item>
                    <Carousel.Item className="rounded-3">
                        <img src={`/images${currentTrip.immagini[1]}`} className="d-block w-100 rounded caroulsel_img" alt="Second slide" />

                    </Carousel.Item>
                    <Carousel.Item className="rounded-3">
                        <img src={`/images${currentTrip.immagini[2]}`} className="d-block w-100 rounded caroulsel_img" alt="Third slide" />

                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

