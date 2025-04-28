import { useState } from "react"
import CardUserDetails from "../components/CardUserDetails"


export default function Details() {

    const [viweDetails, setviweDetails] = useState(false)

    return (

        <>
            <div className="container py-5">
                <h1>DETAILS</h1>
                <div className="btn btn-primary client_details" onClick={() => setviweDetails(!viweDetails)}>Details</div>
                {viweDetails && <CardUserDetails id={3} onClick={() => setviweDetails(!viweDetails)} />}

            </div>
        </>

    )
}