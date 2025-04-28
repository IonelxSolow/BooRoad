import { useGlobal } from "../contexts/GlobalContext"
/*  */

export default function CardUserDetails({ id, onClick }) {

    const { clienti, } = useGlobal()

    console.log(id);


    const userDetails = clienti.find(cliente => cliente.id === id)

    const { viaggiAssociati, nome, cognome, mail, telefono, codiceFiscale, immaginePersona } = userDetails


    return (

        <>
            <div className=" user-details-overlay d-flex justify-content-center align-items-center body-secondary z-3">

                <div className="card card-custom bg-white border-white border-0">
                    <div className="card-custom-img text-end"><div className="btn border-0" onClick={onClick}><i className="bi bi-x-lg text-white"></i>
                    </div></div>
                    <div className="card-custom-avatar">
                        <img className="img-fluid" src={immaginePersona} alt="Avatar" />
                    </div>
                    <div className="card-body d-flex flex-column " >
                        <h4 className="card-title">{`${nome} ${cognome}`}</h4>
                        <div className="card-text"><p className="card-text">Email: {mail}</p>
                            <p className="card-text">Telefono: {telefono}</p>
                            <p className="card-text">CF: {codiceFiscale}</p></div>
                    </div>
                    <div className="card-footer text-center  border-top " style={{ background: "inherit", borderColor: "inherit" }}>
                        <a href={`tel:${telefono}`} className="btn fs-4 "><i className="bi bi-telephone"></i></a>
                        <a href={`sms:${telefono}`} className="btn fs-4 "><i className="bi bi-chat-text"></i></a>
                        <a href={`whatsapp:${telefono}`} className="btn fs-4 "><i className="bi bi-whatsapp"></i></a>
                        <a href={`mailto:${mail}`} className="btn fs-4 "><i className="bi bi-envelope"></i></a>
                    </div>
                </div>

            </div>





        </>

    )
}
