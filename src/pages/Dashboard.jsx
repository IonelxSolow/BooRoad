import { useState, useEffect } from "react";
import { useGlobal } from "../contexts/GlobalContext";

export default function Dashboard() {
    const { destinazioni, setDestinazioni } = useGlobal();
    const [immaginiJumbo, setImmaginiJumbo] = useState("")

    const [newTrip, setNewTrip] = useState({
        id: destinazioni.length + 1,
        destinazione: "",
        dataInizio: "",
        dataFine: "",
        immagineCopertina: "",
        immagini: [""],
        numeroEmergenza: "",
        luoghiDaVisitare: [""],
    });
    console.log(newTrip);
    console.log(destinazioni);

    useEffect(() => {
        setNewTrip({ ...newTrip, immagini: Array.from(immaginiJumbo.split(",")) });
    }, [immaginiJumbo]);

    function creazione(e) {
        e.preventDefault(); // Impedisce il comportamento predefinito del form
        console.log(immaginiJumbo);

        console.log("Creazione viaggio:", newTrip);
        setDestinazioni([...destinazioni, newTrip]); // Aggiungi il nuovo viaggio all'array delle destinazioni
    }

    return (
        <>
            <div className="container pt-5">
                <h1 className="text-center">Creazione Viaggi</h1>
            </div>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="destinazione" className="form-label">Destinazione</label>
                        <input type="text" className="form-control" id="destinazione" placeholder="Inserisci la destinazione" value={newTrip.destinazione} onChange={(e) => setNewTrip({ ...newTrip, destinazione: e.target.value })} />
                    </div>

                    <div className="mb-3 row row-cols-2 ">
                        <div>

                            <label htmlFor="dataInizio" className="form-label">Data Inizio</label>
                            <input type="date" className="form-control" id="dataInizio" value={newTrip.dataInizio} onChange={(e) => setNewTrip({ ...newTrip, dataInizio: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="dataFine" className="form-label">Data Fine</label>
                            <input type="date" className="form-control" id="dataFine" value={newTrip.dataFine} onChange={(e) => setNewTrip({ ...newTrip, dataFine: e.target.value })} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="immagineCopertina" className="form-label">Immagine Copertina</label>
                        <input type="text" className="form-control" id="immagineCopertina" placeholder="Inserisci il link dell'immagine" value={newTrip.immagineCopertina} onChange={(e) => setNewTrip({ ...newTrip, immagineCopertina: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Immagini" className="form-label">Immagini dettagli</label>
                        <input type="text" className="form-control" id="Immagini" placeholder="formato richiesto : /latuaimmagine.jpg e separa con la virgola" value={immaginiJumbo} onChange={(e) => setImmaginiJumbo(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numeroEmergenza" className="form-label">Numero di Emergenza</label>
                        <input type="text" className="form-control" id="numeroEmergenza" placeholder="Inserisci il numero di emergenza" value={newTrip.numeroEmergenza} onChange={(e) => setNewTrip({ ...newTrip, numeroEmergenza: e.target.value })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="luoghiDaVisitare" className="form-label">Luoghi da Visitare</label>
                        <textarea className="form-control" id="luoghiDaVisitare" rows="3" placeholder="Inserisci i luoghi separati da una virgola" value={newTrip.luoghiDaVisitare} onChange={(e) => setNewTrip({ ...newTrip, luoghiDaVisitare: e.target.value.split(",") })}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={creazione}>Crea Viaggio</button>
                </form >

            </div>

        </>
    );
}
