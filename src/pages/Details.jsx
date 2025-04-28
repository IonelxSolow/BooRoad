import { useState } from "react";
import { useGlobal } from "../contexts/GlobalContext"
import CardUserDetails from "../components/CardUserDetails";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";

export default function Details() {
    const [viweDetails, setviweDetails] = useState(false);
    const [index, setIndex] = useState(0)
    const { id } = useParams() // recupero il parametro ID dal'url della pagina
    const { destinazioni } = useGlobal()

    const currentDestination = destinazioni.find((destination) => destination.id === Number(id)) // recupero la destinazione corrente

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }

    console.log(index);


    return (
        <>
            <h1>{currentDestination.destinazione}</h1>
            <div className="btn btn-primary client_details " onClick={() => setviweDetails(!viweDetails)}>Details</div>
            {viweDetails && <CardUserDetails id={3} onClick={() => setviweDetails(!viweDetails)} />}

            <div className="carousel_box container  ">
                <Carousel className="rounded" activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item className="rounded-3">
                        <img src={`/images${currentDestination.immagini[index]}`} className="d-block w-100 rounded " alt="First slide" />

                    </Carousel.Item>
                    <Carousel.Item className="rounded-3">
                        <img src={`/images${currentDestination.immagini[index]}`} className="d-block w-100 rounded" alt="Second slide" />

                    </Carousel.Item>
                    <Carousel.Item className="rounded-3">
                        <img src={`/images${currentDestination.immagini[index]}`} className="d-block w-100 rounded" alt="Third slide" />

                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

