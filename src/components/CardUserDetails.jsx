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

                    <div className="row">
                        <div className="col-5 photo-user">
                            <img src="data:image/png;base64,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"
                                alt={nome + ' ' + cognome}
                                srcset=""
                            />
                        </div>
                        <div className="col-7 details-user">
                            <div className="card-body p-4">
                                <p className="card-text">Email: {mail}</p>
                                <p className="card-text">Telefono: {telefono}</p>
                                <p className="card-text">Codice Fiscale: {codiceFiscale}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>

    )
}