export default function About() {
    return (

        <>
            <div className="container pt-5">
                <h1>Booroad Coordinator App</h1>
                <p>Booroad Coordinator App è l’applicativo pensato per semplificare il lavoro dei coordinatori di viaggio Booroad, offrendo uno strumento semplice e veloce per gestire la comunicazione con i partecipanti.</p>
            </div>
            <div className="container mt-5">
                <h3>Funzionalità principali</h3>
                <p>Con la nostra piattaforma puoi:</p>
                <div className="row row-cols-4row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xxl-4 g-4">

                    <div className="col">
                        <div className="card h-100">
                            <div className="card-header card-about text-center">
                                <span className="me-2" style={{ fontSize: '3rem' }}>📋</span>
                            </div>
                            <div className="card-body">
                                <h4>Programma viaggi</h4>
                                <p>Puoi visualizzare tutti i vaiggi in programma in un’unica schermata</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <div className="card-header card-about text-center">
                                <span className="me-2" style={{ fontSize: '3rem' }}>👥</span>
                            </div>
                            <div className="card-body">
                                <h4>Lista partecipanti</h4>
                                <p>Accedere alla lista dei partecipanti di ogni viaggio in pochi clic.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <div className="card-header card-about text-center">
                                <span className="me-2" style={{ fontSize: '3rem' }}>🔎</span>
                            </div>
                            <div className="card-body">
                                <h4>Dettagli partecipante</h4>
                                <p>Consultare i dettagli di ogni partecipante, come dati personali e preferenze di viaggio.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <div className="card-header card-about text-center">
                                <span className="me-2" style={{ fontSize: '3rem' }}>💬</span>
                            </div>
                            <div className="card-body">
                                <h4>Funzioni contattto integrate</h4>
                                <p>Comunicare direttamente con i partecipanti attraverso diverse modalità integrate.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container mt-5">
                    <p>La Booroad Coordinator App nasce per aiutarti a organizzare e gestire al meglio ogni esperienza di viaggio, mantenendo il contatto con i partecipanti sempre rapido, efficiente e sicuro.</p>

                    <p className="mb-0">Che tu debba inviare informazioni importanti, gestire richieste o semplicemente mantenere il gruppo aggiornato, ora hai tutto quello che ti serve, in un’unica piattaforma.</p>
                </div>
            </div>

        </>

    )
}