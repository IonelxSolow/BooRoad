import { useGlobal } from "../contexts/GlobalContext"


export default function CardUserDetails({ id, onClick }) {

    const { clienti } = useGlobal()

    console.log(clienti);


    const userDetails = clienti.find(cliente => cliente.id === id)

    const { viaggiAssociati, nome, cognome, mail, telefono, codiceFiscale } = userDetails


    return (

        <>
            <div className="user-details-overlay d-flex justify-content-center align-items-center body-secondary " onClick={onClick}>

                <div className="card border-info mb-3">
                    <div className="card-header text-center"><h3>{`${nome} ${cognome}`}</h3></div>
                    <div className="card-body p-4">
                        <p className="card-text">email: {mail}</p>
                        <p className="card-text">telefono: {telefono}</p>
                        <p className="card-text">Codice Fiscale: {codiceFiscale}</p>
                    </div>
                </div>

            </div>

        </>

    )
}