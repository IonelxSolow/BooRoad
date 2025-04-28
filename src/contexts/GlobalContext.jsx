import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [destinazioni, setDestinazioni] = useState([
        {
            id: 1,
            destinazione: "Parigi",
            dataInizio: "2023-06-10",
            dataFine: "2023-06-15",
            immagineCopertina: "/paris.jpg",
            immagini: ["/paris.jpg", "/paris_1.jpg", "/paris_2.jpg"],
            numeroEmergenza: "+33 1 23 45 67 89",
            luoghiDaVisitare: ["Torre Eiffel", "Museo del Louvre", "Cattedrale di Notre-Dame", "Montmartre", "Arco di Trionfo", "Giardini di Lussemburgo"]
        },
        {
            id: 2,
            destinazione: "Londra",
            dataInizio: "2025-07-05",
            dataFine: "2025-07-12",
            immagineCopertina: "/london.jpg",
            immagini: ["/london.jpg", "/london_1.jpg", "/london_2.jpg"],
            numeroEmergenza: "+44 20 7946 0958",
            luoghiDaVisitare: ["Big Ben", "London Eye", "Torre di Londra", "Buckingham Palace", "Hyde Park", "Museo di Storia Naturale"]
        },
        {
            id: 3,
            destinazione: "Roma",
            dataInizio: "2023-08-01",
            dataFine: "2023-08-07",
            immagineCopertina: "/rome.jpg",
            immagini: ["/rome.jpg", "/rome_1.jpg", "/rome_2.jpg"],
            numeroEmergenza: "+39 06 123 4567",
            luoghiDaVisitare: ["Colosseo", "Fontana di Trevi", "Piazza San Pietro", "Pantheon", "Piazza Navona", "Foro Romano"]
        },
        {
            id: 4,
            destinazione: "Barcellona",
            dataInizio: "2025-09-10",
            dataFine: "2025-09-18",
            immagineCopertina: "/barcelona.jpg",
            immagini: ["/barcelona.jpg", "/barcelona_1.jpg", "/barcelona_2.jpg"],
            numeroEmergenza: "+34 93 123 4567",
            luoghiDaVisitare: ["Sagrada Familia", "Parco Güell", "La Rambla", "Casa Batlló", "Montjuïc", "Mercato della Boqueria"]
        },
        {
            id: 5,
            destinazione: "Berlino",
            dataInizio: "2023-10-01",
            dataFine: "2023-10-08",
            immagineCopertina: "/berlin.jpg",
            immagini: ["/berlin.jpg", "/berlin_1.jpg", "/berlin_2.jpg"],
            numeroEmergenza: "+49 30 12345678",
            luoghiDaVisitare: ["Porta di Brandeburgo", "Muro di Berlino", "Reichstag", "Isola dei Musei", "Alexanderplatz", "Checkpoint Charlie"]
        },
        {
            id: 6,
            destinazione: "Amsterdam",
            dataInizio: "2025-04-24",
            dataFine: "2025-05-02",
            immagineCopertina: "/amsterdam.jpg",
            immagini: ["/amsterdam.jpg", "/amsterdam_1.jpg", "/amsterdam_2.jpg"],
            numeroEmergenza: "+31 20 123 4567",
            luoghiDaVisitare: ["Casa di Anna Frank", "Museo Van Gogh", "Canali di Amsterdam", "Piazza Dam", "Rijksmuseum", "Vondelpark"]
        },
        {
            id: 7,
            destinazione: "Praga",
            dataInizio: "2023-12-05",
            dataFine: "2023-12-10",
            immagineCopertina: "/praga.jpg",
            immagini: ["/praga.jpg", "/praga_1.jpg", "/praga_2.jpg"],
            numeroEmergenza: "+420 2 123 45678",
            luoghiDaVisitare: ["Ponte Carlo", "Castello di Praga", "Piazza della Città Vecchia", "Orologio Astronomico", "Cattedrale di San Vito", "Collina di Petřín"]
        },
        {
            id: 8,
            destinazione: "Vienna",
            dataInizio: "2026-01-10",
            dataFine: "2026-01-15",
            immagineCopertina: "/vienna.jpg",
            immagini: ["/vienna.jpg", "/vienna_1.jpg", "/vienna_2.jpg"],
            numeroEmergenza: "+43 1 123 4567",
            luoghiDaVisitare: ["Palazzo di Schönbrunn", "Cattedrale di Santo Stefano", "Opera di Vienna", "Belvedere", "Prater", "Museo di Storia dell'Arte"]
        },
    ]);

    const [clienti, setClienti] = useState([
        {
            id: 1,
            viaggiAssociati: [1],
            nome: 'Luca',
            cognome: 'Rossi',
            mail: 'luca.rossi@email.com',
            telefono: '3201234567',
            codiceFiscale: 'RSSLCU95A01H501T',
            immaginePersona: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            id: 2,
            viaggiAssociati: [2],
            nome: 'Giulia',
            cognome: 'Bianchi',
            mail: 'giulia.bianchi@email.com',
            telefono: '3399876543',
            codiceFiscale: 'BNCGLI93T45L219K',
            immaginePersona: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
            id: 3,
            viaggiAssociati: [3],
            nome: 'Marco',
            cognome: 'Verdi',
            mail: 'marco.verdi@email.com',
            telefono: '3471112233',
            codiceFiscale: 'VRDMRC90A10F205Z',
            immaginePersona: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
            id: 4,
            viaggiAssociati: [4],
            nome: 'Anna',
            cognome: 'Neri',
            mail: 'anna.neri@email.com',
            telefono: '3499988776',
            codiceFiscale: 'NRINNA88C61H501Y',
            immaginePersona: 'https://randomuser.me/api/portraits/women/4.jpg'
        },
        {
            id: 5,
            viaggiAssociati: [5],
            nome: 'Paolo',
            cognome: 'Conti',
            mail: 'paolo.conti@email.com',
            telefono: '3481122334',
            codiceFiscale: 'CNTPLO91S12L219C',
            immaginePersona: 'https://randomuser.me/api/portraits/men/5.jpg'
        },
        {
            id: 6,
            viaggiAssociati: [1, 2],
            nome: 'Elena',
            cognome: 'Moretti',
            mail: 'elena.moretti@email.com',
            telefono: '3512233445',
            codiceFiscale: 'MRTELN92D47F205S',
            immaginePersona: 'https://randomuser.me/api/portraits/women/6.jpg'
        },
        {
            id: 7,
            viaggiAssociati: [2, 3],
            nome: 'Alessandro',
            cognome: 'Ferrari',
            mail: 'alessandro.ferrari@email.com',
            telefono: '3503344556',
            codiceFiscale: 'FRRLSN94M22H501R',
            immaginePersona: 'https://randomuser.me/api/portraits/men/7.jpg'
        },
        {
            id: 8,
            viaggiAssociati: [4, 5],
            nome: 'Sara',
            cognome: 'Russo',
            mail: 'sara.russo@email.com',
            telefono: '3314455667',
            codiceFiscale: 'RSSSRA95L01D612E',
            immaginePersona: 'https://randomuser.me/api/portraits/women/8.jpg'
        },
        {
            id: 9,
            viaggiAssociati: [1, 3],
            nome: 'Davide',
            cognome: 'Galli',
            mail: 'davide.galli@email.com',
            telefono: '3335566778',
            codiceFiscale: 'GLLDVD93R45C351P',
            immaginePersona: 'https://randomuser.me/api/portraits/men/9.jpg'
        },
        {
            id: 10,
            viaggiAssociati: [5],
            nome: 'Francesca',
            cognome: 'Martini',
            mail: 'francesca.martini@email.com',
            telefono: '3346677889',
            codiceFiscale: 'MRTFNC89M01H703A',
            immaginePersona: 'https://randomuser.me/api/portraits/women/10.jpg'
        },
        {
            id: 11,
            viaggiAssociati: [6],
            nome: 'Matteo',
            cognome: 'Ricci',
            mail: 'matteo.ricci@email.com',
            telefono: '3201112233',
            codiceFiscale: 'RCCMTT90A01H501U',
            immaginePersona: 'https://randomuser.me/api/portraits/men/11.jpg'
        },
        {
            id: 12,
            viaggiAssociati: [7],
            nome: 'Chiara',
            cognome: 'Fontana',
            mail: 'chiara.fontana@email.com',
            telefono: '3392223344',
            codiceFiscale: 'FNTCHR91B12L219V',
            immaginePersona: 'https://randomuser.me/api/portraits/women/12.jpg'
        },
        {
            id: 13,
            viaggiAssociati: [8],
            nome: 'Simone',
            cognome: 'Greco',
            mail: 'simone.greco@email.com',
            telefono: '3473334455',
            codiceFiscale: 'GRCSMN92C23F205W',
            immaginePersona: 'https://randomuser.me/api/portraits/men/13.jpg'
        },
        {
            id: 14,
            viaggiAssociati: [1, 4],
            nome: 'Martina',
            cognome: 'De Luca',
            mail: 'martina.deluca@email.com',
            telefono: '3494445566',
            codiceFiscale: 'DLCMTN93D34H501X',
            immaginePersona: 'https://randomuser.me/api/portraits/women/14.jpg'
        },
        {
            id: 15,
            viaggiAssociati: [2, 5],
            nome: 'Fabio',
            cognome: 'Costa',
            mail: 'fabio.costa@email.com',
            telefono: '3485556677',
            codiceFiscale: 'CSTFBO94E45L219Y',
            immaginePersona: 'https://randomuser.me/api/portraits/men/15.jpg'
        },
        {
            id: 16,
            viaggiAssociati: [3, 6],
            nome: 'Valentina',
            cognome: 'Riva',
            mail: 'valentina.riva@email.com',
            telefono: '3516667788',
            codiceFiscale: 'RVAVLN95F56F205Z',
            immaginePersona: 'https://randomuser.me/api/portraits/women/16.jpg'
        },
        {
            id: 17,
            viaggiAssociati: [7, 8],
            nome: 'Giorgio',
            cognome: 'Barbieri',
            mail: 'giorgio.barbieri@email.com',
            telefono: '3507778899',
            codiceFiscale: 'BRBGRG96G67H501A',
            immaginePersona: 'https://randomuser.me/api/portraits/men/17.jpg'
        },
        {
            id: 18,
            viaggiAssociati: [1, 2, 3],
            nome: 'Alessia',
            cognome: 'Marini',
            mail: 'alessia.marini@email.com',
            telefono: '3318889900',
            codiceFiscale: 'MRNLSS97H78D612B',
            immaginePersona: 'https://randomuser.me/api/portraits/women/18.jpg'
        },
        {
            id: 19,
            viaggiAssociati: [4, 5, 6],
            nome: 'Stefano',
            cognome: 'Gatti',
            mail: 'stefano.gatti@email.com',
            telefono: '3339990011',
            codiceFiscale: 'GTTSTF98I89C351C',
            immaginePersona: 'https://randomuser.me/api/portraits/men/19.jpg'
        },
        {
            id: 20,
            viaggiAssociati: [7, 8, 1],
            nome: 'Federica',
            cognome: 'Romano',
            mail: 'federica.romano@email.com',
            telefono: '3340001122',
            codiceFiscale: 'RMNFDR99L90H703D',
            immaginePersona: 'https://randomuser.me/api/portraits/women/20.jpg'
        },
        {
            id: 21,
            viaggiAssociati: [2],
            nome: 'Lorenzo',
            cognome: 'Sartori',
            mail: 'lorenzo.sartori@email.com',
            telefono: '3201234321',
            codiceFiscale: 'SRTLNZ00A01H501E',
            immaginePersona: 'https://randomuser.me/api/portraits/men/21.jpg'
        },
        {
            id: 22,
            viaggiAssociati: [3],
            nome: 'Ilaria',
            cognome: 'Villa',
            mail: 'ilaria.villa@email.com',
            telefono: '3392345432',
            codiceFiscale: 'VLLILR01B12L219F',
            immaginePersona: 'https://randomuser.me/api/portraits/women/22.jpg'
        },
        {
            id: 23,
            viaggiAssociati: [4],
            nome: 'Nicola',
            cognome: 'Ferraro',
            mail: 'nicola.ferraro@email.com',
            telefono: '3473456543',
            codiceFiscale: 'FRRNCL02C23F205G',
            immaginePersona: 'https://randomuser.me/api/portraits/men/23.jpg'
        },
        {
            id: 24,
            viaggiAssociati: [5],
            nome: 'Silvia',
            cognome: 'Colombo',
            mail: 'silvia.colombo@email.com',
            telefono: '3494567654',
            codiceFiscale: 'CLMSLV03D34H501H',
            immaginePersona: 'https://randomuser.me/api/portraits/women/24.jpg'
        },
        {
            id: 25,
            viaggiAssociati: [6],
            nome: 'Davide',
            cognome: 'Rossi',
            mail: 'davide.rossi@email.com',
            telefono: '3485678765',
            codiceFiscale: 'RSSDVD04E45L219I',
            immaginePersona: 'https://randomuser.me/api/portraits/men/25.jpg'
        },
        {
            id: 26,
            viaggiAssociati: [7],
            nome: 'Elisa',
            cognome: 'Martini',
            mail: 'elisa.martini@email.com',
            telefono: '3516789876',
            codiceFiscale: 'MRTELS05F56F205J',
            immaginePersona: 'https://randomuser.me/api/portraits/women/26.jpg'
        },
        {
            id: 27,
            viaggiAssociati: [8],
            nome: 'Andrea',
            cognome: 'De Angelis',
            mail: 'andrea.deangelis@email.com',
            telefono: '3507890987',
            codiceFiscale: 'DNGNDR06G67H501K',
            immaginePersona: 'https://randomuser.me/api/portraits/men/27.jpg'
        },
        {
            id: 28,
            viaggiAssociati: [1],
            nome: 'Roberta',
            cognome: 'Fabbri',
            mail: 'roberta.fabbri@email.com',
            telefono: '3318901098',
            codiceFiscale: 'FBBRRT07H78D612L',
            immaginePersona: 'https://randomuser.me/api/portraits/women/28.jpg'
        },
        {
            id: 29,
            viaggiAssociati: [2],
            nome: 'Gabriele',
            cognome: 'Mancini',
            mail: 'gabriele.mancini@email.com',
            telefono: '3339012109',
            codiceFiscale: 'MNCGBR08I89C351M',
            immaginePersona: 'https://randomuser.me/api/portraits/men/29.jpg'
        },
        {
            id: 30,
            viaggiAssociati: [3],
            nome: 'Serena',
            cognome: 'Rizzo',
            mail: 'serena.rizzo@email.com',
            telefono: '3340123210',
            codiceFiscale: 'RZZSRN09L90H703N',
            immaginePersona: 'https://randomuser.me/api/portraits/women/30.jpg'
        },
        {
            id: 31,
            viaggiAssociati: [4],
            nome: 'Riccardo',
            cognome: 'Testa',
            mail: 'riccardo.testa@email.com',
            telefono: '3201234568',
            codiceFiscale: 'TSTRCR10A01H501O',
            immaginePersona: 'https://randomuser.me/api/portraits/men/31.jpg'
        },
        {
            id: 32,
            viaggiAssociati: [5],
            nome: 'Marta',
            cognome: 'Gentile',
            mail: 'marta.gentile@email.com',
            telefono: '3399876544',
            codiceFiscale: 'GNTMRT11B12L219P',
            immaginePersona: 'https://randomuser.me/api/portraits/women/32.jpg'
        },
        {
            id: 33,
            viaggiAssociati: [6],
            nome: 'Tommaso',
            cognome: 'Fiore',
            mail: 'tommaso.fiore@email.com',
            telefono: '3471112234',
            codiceFiscale: 'FRTTMS12C23F205Q',
            immaginePersona: 'https://randomuser.me/api/portraits/men/33.jpg'
        },
        {
            id: 34,
            viaggiAssociati: [7],
            nome: 'Giada',
            cognome: 'Serra',
            mail: 'giada.serra@email.com',
            telefono: '3499988777',
            codiceFiscale: 'SRRGDA13D34H501R',
            immaginePersona: 'https://randomuser.me/api/portraits/women/34.jpg'
        },
        {
            id: 35,
            viaggiAssociati: [8],
            nome: 'Emanuele',
            cognome: 'Longo',
            mail: 'emanuele.longo@email.com',
            telefono: '3481122335',
            codiceFiscale: 'LNGMNL14E45L219S',
            immaginePersona: 'https://randomuser.me/api/portraits/men/35.jpg'
        },
        {
            id: 36,
            viaggiAssociati: [1],
            nome: 'Beatrice',
            cognome: 'Monti',
            mail: 'beatrice.monti@email.com',
            telefono: '3512233446',
            codiceFiscale: 'MNTBTR15F56F205T',
            immaginePersona: 'https://randomuser.me/api/portraits/women/36.jpg'
        },
        {
            id: 37,
            viaggiAssociati: [2],
            nome: 'Pietro',
            cognome: 'Sanna',
            mail: 'pietro.sanna@email.com',
            telefono: '3503344557',
            codiceFiscale: 'SNNPTR16G67H501U',
            immaginePersona: 'https://randomuser.me/api/portraits/men/37.jpg'
        },
        {
            id: 38,
            viaggiAssociati: [3],
            nome: 'Camilla',
            cognome: 'Leone',
            mail: 'camilla.leone@email.com',
            telefono: '3314455668',
            codiceFiscale: 'LNNCML17H78D612V',
            immaginePersona: 'https://randomuser.me/api/portraits/women/38.jpg'
        },
        {
            id: 39,
            viaggiAssociati: [4],
            nome: 'Stefania',
            cognome: 'Pellegrini',
            mail: 'stefania.pellegrini@email.com',
            telefono: '3335566779',
            codiceFiscale: 'PLLSFN18I89C351W',
            immaginePersona: 'https://randomuser.me/api/portraits/women/39.jpg'
        },
        {
            id: 40,
            viaggiAssociati: [5],
            nome: 'Daniele',
            cognome: 'Ruggeri',
            mail: 'daniele.ruggeri@email.com',
            telefono: '3346677890',
            codiceFiscale: 'RGGDNL19L90H703X',
            immaginePersona: 'https://randomuser.me/api/portraits/men/40.jpg'
        },
    ]);



    return (
        <GlobalContext.Provider value={{ clienti, destinazioni, setDestinazioni, setClienti }}>
            {children}
        </GlobalContext.Provider>
    );
};

function useGlobal() {
    return useContext(GlobalContext);
}

export { useGlobal };