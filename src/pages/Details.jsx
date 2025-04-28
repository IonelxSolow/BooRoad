import { useState, useEffect } from "react";
import { useGlobal } from "../contexts/GlobalContext";
import { useParams } from "react-router-dom";
import CardUserDetails from "../components/CardUserDetails";
import Carousel from "react-bootstrap/Carousel";

export default function Details() {
    const [viewDetails, setViewDetails] = useState(false);
    const [selectedClientId, setSelectedClientId] = useState(null);
    const [index, setIndex] = useState(0);
    const { id } = useParams();
    const { currentTrip, destinazioni, clienti, setCurrentTrip } = useGlobal();

    // Debug log per l'ID dall'URL
    console.log("URL ID Parameter:", id, "Type:", typeof id);

    useEffect(() => {
        if (!currentTrip && id) {
            const tripId = parseInt(id);
            console.log("Searching for trip with ID:", tripId);
            const trip = destinazioni.find(d => d.id === tripId);
            console.log("Found trip:", trip);
            if (trip) {
                setCurrentTrip(trip);
            }
        }
    }, [id, currentTrip, destinazioni, setCurrentTrip]);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // Debug logs per lo stato corrente
    console.log("Current Trip State:", currentTrip);
    console.log("Destinazioni:", destinazioni);
    console.log("Clienti:", clienti);

    if (!currentTrip) {
        console.log("No current trip found");
        return <div className="text-center">Caricamento...</div>;
    }

    // Filtra i clienti associati al viaggio corrente con log dettagliati
    const viaggiatoriAssociati = clienti.filter(cliente => {
        const tripId = Number(currentTrip.id);
        console.log(`\nChecking cliente ${cliente.nome} ${cliente.cognome}:`);
        console.log(`- Cliente viaggi:`, cliente.viaggiAssociati);
        console.log(`- Looking for trip ID:`, tripId);
        
        // Verifica se almeno uno dei viaggi associati corrisponde
        const hasTrip = cliente.viaggiAssociati.some(viaggioId => {
            const numericViaggioId = Number(viaggioId);
            const matches = numericViaggioId === tripId;
            console.log(`- Comparing ${numericViaggioId} with ${tripId}: ${matches}`);
            return matches;
        });
        
        console.log(`- Final result for ${cliente.nome}: ${hasTrip}`);
        return hasTrip;
    });

    console.log(`\nFinal Results for ${currentTrip.destinazione} (ID: ${currentTrip.id}):`);
    console.log(`Found ${viaggiatoriAssociati.length} viaggiatori:`, 
        viaggiatoriAssociati.map(v => `${v.nome} ${v.cognome}`));

    return (
        <>
            <h1 className="text-center">{currentTrip.destinazione}</h1>
            <div className="carousel_box container carousel-fade">
                <Carousel
                    className="rounded"
                    activeIndex={index}
                    onSelect={handleSelect}
                    interval={2000}
                >
                    <Carousel.Item className="rounded-3">
                        <img
                            src={`/images${currentTrip.immagini[0]}`}
                            className="d-block w-100 rounded caroulsel_img"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="rounded-3">
                        <img
                            src={`/images${currentTrip.immagini[1]}`}
                            className="d-block w-100 rounded caroulsel_img"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="rounded-3">
                        <img
                            src={`/images${currentTrip.immagini[2]}`}
                            className="d-block w-100 rounded caroulsel_img"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container mt-5">
                <h3 className="mb-4">Viaggiatori ({viaggiatoriAssociati.length})</h3>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Cognome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Azioni</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viaggiatoriAssociati.length > 0 ? (
                                viaggiatoriAssociati.map((cliente, index) => (
                                    <tr key={cliente.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.cognome}</td>
                                        <td>{cliente.mail}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary btn-sm"
                                                onClick={() => {
                                                    setSelectedClientId(cliente.id);
                                                    setViewDetails(true);
                                                }}
                                            >
                                                <i className="bi bi-eye me-1"></i>
                                                Dettagli
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        Nessun viaggiatore associato a questo viaggio
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {viewDetails && (
                <CardUserDetails
                    id={selectedClientId}
                    onClick={() => setViewDetails(false)}
                />
            )}
        </>
    );
}

