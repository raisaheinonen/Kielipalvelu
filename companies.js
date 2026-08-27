const companies = [

{
    id:"sinervo",
    name:"Clínica Medicodental Sinervo",
    language:"Suomi",
    service:"Hammaslääkäri",
    country:"Espanja",
    city:"Fuengirola",
    address:"Av Ntro Padre Jesus Cautivo 2",
    description:"Suomalainen lääkäri- ja hammaslääkäriklinikka Fuengirolassa.",
    website:"www.medicodentalsinervo.com",
    premium:false,
    lat:36.539,
    lng:-4.624
},

    {
    id:"noruega-fi",
    name:"Clinica Dental Noruega",
    language:"Suomi",
    service:"Hammaslääkäri",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avda. Clemente Diaz Ruiz 4",
    description:"Pohjoismainen hammasklinikka Fuengirolassa.",
    website:"www.clinicadentalnoruega.com",
    premium:false,
    lat:36.541,
    lng:-4.623
},
    {
    id:"noruega-sv",
    name:"Clinica Dental Noruega",
    language:"Ruotsi",
    service:"Hammaslääkäri",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avda. Clemente Diaz Ruiz 4",
    description:"Nordisk tandklinik i Fuengirola.",
    website:"www.clinicadentalnoruega.com",
    premium:false,
    lat:36.541,
    lng:-4.623
},

    {
    id:"noruega-en",
    name:"Clinica Dental Noruega",
    language:"Englanti",
    service:"Hammaslääkäri",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avda. Clemente Diaz Ruiz 4",
    description:"Nordic dental clinic in Fuengirola.",
    website:"www.clinicadentalnoruega.com",
    premium:false,
    lat:36.541,
    lng:-4.623
},

    {
    id:"noruega-no",
    name:"Clinica Dental Noruega",
    language:"Norja",
    service:"Hammaslääkäri",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avda. Clemente Diaz Ruiz 4",
    description:"Nordisk tannklinikk i Fuengirola.",
    website:"www.clinicadentalnoruega.com",
    premium:false,
    lat:36.541,
    lng:-4.623
},

    {
    id:"noruega-da",
    name:"Clinica Dental Noruega",
    language:"Tanska",
    service:"Hammaslääkäri",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avda. Clemente Diaz Ruiz 4",
    description:"Nordisk tandklinik i Fuengirola.",
    website:"www.clinicadentalnoruega.com",
    premium:false,
    lat:36.541,
    lng:-4.623
},


{
    id:"dentalcer",
    name:"DentalCer Los Boliches",
    language:"Suomi",
    service:"Hammaslääkäri",
    country:"Espanja",
    city:"Fuengirola",
    address:"Av. de Los Boliches 87",
    description:"Hammasklinikka, jossa suomenkielinen vastaanotto.",
    website:"www.clinicasdentalcer.com",
    premium:false,
    lat:36.553,
    lng:-4.615
},
    
{
    id:"sinervo-doctor",
    name:"Clínica Medicodental Sinervo",
    language:"Suomi",
    service:"Lääkäri",
    country:"Espanja",
    city:"Fuengirola",
    address:"Av Ntro Padre Jesus Cautivo 2",
    description:"Suomenkielisiä lääkäripalveluja Aurinkorannikolla.",
    website:"www.medicodentalsinervo.com",
    premium:false,
    lat:36.539,
    lng:-4.624
},

    {
    id:"higueron-homes-fi",
    name:"Higuerón Homes",
    language:"Suomi",
    service:"Kiinteistönvälittäjä",
    country:"Espanja",
    phone:"+358 40 528 11 52",
    city:"Fuengirola",
    address:"Calle Margarita Salas, Fuengirola",
    description:"Perheyritys, joka tarjoaa suomeksi asuntojen myyntiä ja vuokrausta Costa del Solilla.",
    website:"www.higueronhomes.com",
    logo:"images/higueron-homes-logo.png",
    premium:true,
    lat:36.573609,
    lng:-4.595682

},

    {
    id:"higueron-homes-en",
    name:"Higuerón Homes",
    language:"Englanti",
    service:"Kiinteistönvälittäjä",
    country:"Espanja",
    phone:"+358 40 528 11 52",
    city:"Fuengirola",
    address:"Calle Margarita Salas, Fuengirola",
    description:"A family-owned company offering English-speaking property sales and rental services on the Costa del Sol.",
    website:"www.higueronhomes.com",
    logo:"images/higueron-homes-logo.png",
    premium:true,
    lat:36.573609,
    lng:-4.595682
    
},

    {
    id:"prius-abogados-fi",
    name:"Prius Abogados",
    language:"Suomi",
    service:"Lakimies",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avenida Jesús Santos Rein 2",
    description:"Suomenkielisiä laki- ja veropalveluja Espanjassa.",
    website:"www.priusabogados.es",
    premium:false,
    lat:36.5395,
    lng:-4.6237
},

    {
    id:"prius-abogados-en",
    name:"Prius Abogados",
    language:"Englanti",
    service:"Lakimies",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avenida Jesús Santos Rein 2",
    description:"Legal and tax services in Spain for international clients.",
    website:"www.priusabogados.es",
    premium:false,
    lat:36.5395,
    lng:-4.6237
},

    {
    id:"laakso-law-fi",
    name:"Laakso Law",
    language:"Suomi",
    service:"Lakimies",
    country:"Espanja",
    city:"Torrevieja",
    address:"C/ Ramón Gallud 94-98",
    description:"Suomenkielisiä lakipalveluja ja kiinteistöjuridiikkaa Espanjassa.",
    website:"www.laaksolaw.com",
    premium:false,
    lat:37.9780,
    lng:-0.6820
},

    {
    id:"aj-forsman-fi",
    name:"AJ Forsman Abogados",
    language:"Suomi",
    service:"Lakimies",
    country:"Espanja",
    city:"Fuengirola",
    address:"Las Viñas 32",
    description:"Suomenkielinen asianajotoimisto kiinteistö-, vero- ja lakiasioissa.",
    website:"www.ajforsmanabogados.com",
    premium:false,
    lat:36.5390,
    lng:-4.6240
},

    {
    id:"aj-forsman-en",
    name:"AJ Forsman Abogados",
    language:"Englanti",
    service:"Lakimies",
    country:"Espanja",
    city:"Fuengirola",
    address:"Las Viñas 32",
    description:"Legal services related to property, taxation and general legal matters in Spain.",
    website:"www.ajforsmanabogados.com",
    premium:false,
    lat:36.5390,
    lng:-4.6240
},

    {
    id:"spkoti-costa-del-sol-fi",
    name:"Sp-Koti Costa del Sol",
    language:"Suomi",
    service:"Kiinteistönvälittäjä",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avenida de las Gaviotas 3",
    description:"Suomalaisomisteinen kiinteistönvälitystoimisto Costa del Solilla.",
    website:"www.spkoti.es",
    premium:false,
    lat:36.5580,
    lng:-4.6115
},

    {
    id:"spkoti-costa-del-sol-en",
    name:"Sp-Koti Costa del Sol",
    language:"Englanti",
    service:"Kiinteistönvälittäjä",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avenida de las Gaviotas 3",
    description:"Real estate agency on the Costa del Sol serving international clients.",
    website:"www.spkoti.es",
    premium:false,
    lat:36.5580,
    lng:-4.6115
},

    {
    id:"spkoti-costa-del-sol-sv",
    name:"Sp-Koti Costa del Sol",
    language:"Ruotsi",
    service:"Kiinteistönvälittäjä",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avenida de las Gaviotas 3",
    description:"Fastighetsförmedling på Costa del Sol.",
    website:"www.spkoti.es",
    premium:false,
    lat:36.5580,
    lng:-4.6115
},

    {
    id:"spkoti-costa-del-sol-de",
    name:"Sp-Koti Costa del Sol",
    language:"Saksa",
    service:"Kiinteistönvälittäjä",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avenida de las Gaviotas 3",
    description:"Immobilienvermittlung an der Costa del Sol.",
    website:"www.spkoti.es",
    premium:false,
    lat:36.5580,
    lng:-4.6115
},

    {
    id:"spkoti-costa-del-sol-it",
    name:"Sp-Koti Costa del Sol",
    language:"Italia",
    service:"Kiinteistönvälittäjä",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avenida de las Gaviotas 3",
    description:"Servizi immobiliari sulla Costa del Sol.",
    website:"www.spkoti.es",
    premium:false,
    lat:36.5580,
    lng:-4.6115
},

    {
    id:"asunto-del-sol-fi",
    name:"Asunto del Sol",
    language:"Suomi",
    service:"Kiinteistönvälittäjä",
    country:"Espanja",
    city:"Marbella",
    address:"Costa del Sol",
    description:"Suomalainen kiinteistönvälitys Costa del Solilla.",
    website:"www.asuntodelsol.com",
    premium:false,
    lat:36.5100,
    lng:-4.8800
},

    {
    id:"asunto-del-sol-en",
    name:"Asunto del Sol",
    language:"Englanti",
    service:"Kiinteistönvälittäjä",
    country:"Espanja",
    city:"Marbella",
    address:"Costa del Sol",
    description:"Real estate agency on the Costa del Sol serving international clients.",
    website:"www.asuntodelsol.com",
    premium:false,
    lat:36.5100,
    lng:-4.8800
},

    {
    id:"palm-homes-fi",
    name:"Palm Homes",
    language:"Suomi",
    service:"Kiinteistönvälittäjä",
    country:"Espanja",
    city:"Fuengirola",
    address:"Calle Oliva 3",
    description:"Asuntojen myyntiä ja vuokrausta Aurinkorannikolla.",
    website:"www.palmhomes.es",
    premium:false,
    lat:36.5390,
    lng:-4.6240
},

    {
    id:"lawbird-legal-en",
    name:"Lawbird Legal Services",
    language:"Englanti",
    service:"Lakimies",
    country:"Espanja",
    city:"Marbella",
    address:"Ricardo Soriano 19 - 4",
    description:"Lakipalveluja ja kiinteistöjuridiikkaa Espanjassa kansainvälisille asiakkaille.",
    website:"www.lawbird.com",
    premium:false,
    lat:36.5100,
    lng:-4.8850
},

    {
    id:"costaklinikka-fi",
    name:"Costaklinikka",
    language:"Suomi",
    service:"Lääkäri",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avenida Nuestro Padre Jesus Cautivo 11",
    description:"Suomalainen lääkärikeskus Fuengirolassa.",
    website:"www.costaklinikka.com",
    phone:"+358 50 5581199",
    premium:false,
    lat:36.5534,
    lng:-4.6151
},

    {
    id:"costadoctor-en",
    name:"CostaDoctor",
    language:"Englanti",
    service:"Lääkäri",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avenida Nuestro Padre Jesus Cautivo 11",
    description:"English-speaking medical clinic in Fuengirola providing healthcare services for international patients.",
    website:"www.costadoctor.com",
    premium:false,
    lat:36.5534,
    lng:-4.6151
},

    {
    id:"borja-alcoholado-fi",
    name:"Clínica Dental Borja Alcoholado",
    language:"Suomi",
    service:"Hammaslääkäri",
    country:"Espanja",
    city:"Fuengirola",
    address:"Av. Nuestro Padre Jesús Cautivo 35",
    description:"Hammaslääkäriasema Los Bolichesissa. Palvelua suomeksi, englanniksi ja espanjaksi.",
    website:"www.clinicadentalborjaalcoholado.com",
    premium:false,
    lat:36.549,
    lng:-4.617
},

    {
    id:"borja-alcoholado-en",
    name:"Clínica Dental Borja Alcoholado",
    language:"Englanti",
    service:"Hammaslääkäri",
    country:"Espanja",
    city:"Fuengirola",
    address:"Av. Nuestro Padre Jesús Cautivo 35",
    description:"Dental clinic in Los Boliches. Service available in English, Finnish and Spanish.",
    website:"www.clinicadentalborjaalcoholado.com",
    premium:false,
    lat:36.549,
    lng:-4.617
},

    {
    id:"suomiklinikka-fi",
    name:"Suomiklinikka",
    language:"Suomi",
    service:"Lääkäri",
    country:"Espanja",
    city:"Playa del Inglés",
    address:"Calle San Cristóbal de la Laguna 9",
    description:"Suomalainen lääkärikeskus Playa del Inglésissä. Vastaanotolla palvellaan suomeksi.",
    website:"www.suomiklinikka.com",
    phone:"+34 928 77 72 60",
    premium:false,
    lat:27.762608,
    lng:-15.566282
},

    {
    id:"suomiklinikka-dental-fi",
    name:"Suomiklinikka",
    language:"Suomi",
    service:"Hammaslääkäri",
    country:"Espanja",
    city:"Playa del Inglés",
    address:"Calle San Cristóbal de la Laguna 9",
    description:"Suomalainen lääkärikeskus Playa del Inglésissä. Vastaanotolla palvellaan suomeksi ja samoista tiloista löytyvät myös hammaslääkäripalvelut.",
    website:"www.suomiklinikka.com",
    phone:"+34 928 77 72 60",
    premium:false,
    lat:27.762608,
    lng:-15.566282
},

    {
    id:"sisma-fi",
    name:"Servicios Sanitarios SISMA",
    language:"Suomi",
    service:"Lääkäri",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avenida Finlandia 19",
    description:"24/7 lääkäripalvelut, kotikäynnit, ambulanssit ja sairaankuljetukset Costa del Solilla.",
    website:"www.servicios-sisma.com",
    phone:"+34 624 62 86 00",
    premium:false,
    lat:36.5657,
    lng:-4.6113
},

    {
    id:"sisma-en",
    name:"Servicios Sanitarios SISMA",
    language:"Englanti",
    service:"Lääkäri",
    country:"Espanja",
    city:"Fuengirola",
    address:"Avenida Finlandia 19",
    description:"24/7 medical care, home visits, ambulances and medical transportation on the Costa del Sol.",
    website:"www.servicios-sisma.com",
    phone:"+34 624 62 86 00",
    premium:false,
    lat:36.5657,
    lng:-4.6113
},

    {
    id:"interlaki-fi",
    name:"InterLaki España Finlandia",
    language:"Suomi",
    service:"Lakimies",
    country:"Espanja",
    city:"Málaga",
    address:"Calle Linaje 4, 7A",
    description:"Suomen ja Espanjan lakiasioihin erikoistunut lakitoimisto. Palvelua suomalaisille yksityishenkilöille ja yrityksille.",
    website:"www.interlaki.es",
    phone:"+34 640 710 320",
    premium:false,
    lat:36.716033,
    lng:-4.425240
},

    {
    id:"finnvilla-fi",
    name:"Finnvilla",
    language:"Suomi",
    service:"Kiinteistönvälittäjä",
    country:"Espanja",
    city:"Fuengirola",
    address:"C. Miguel de Cervantes, 19",
    description:"Suomalainen kiinteistönvälitys Costa del Solilla. Apua asunnon ostoon, myyntiin ja vuokraukseen.",
    website:"www.finnvilla.com",
    premium:false,
    lat:36.5516,
    lng:-4.6158
},

    {
    id:"jaris-rentals-fi",
    name:"Jari's Rentals",
    language:"Suomi",
    service:"Autovuokraamo",
    country:"Espanja",
    city:"Fuengirola",
    address:"Calle Santa Rosa 20, Local 3",
    description:"Suomalainen autovuokraamo Costa del Solilla. Autojen vuokrausta suomalaisella palvelulla.",
    website:"www.jarisrentals.com",
    premium:false,
    lat:36.554092,
    lng:-4.615484
},

    {
    id:"jeti-costa-fi",
    name:"Jeti Costa",
    language:"Suomi",
    service:"Autovuokraamo",
    country:"Espanja",
    city:"Fuengirola",
    address:"Calle Ricardo Zamora",
    description:"Suomenkielinen autonvuokraus Costa del Solilla.",
    website:"www.jeticosta.com",
    premium:false,
    lat:36.563216,
    lng:-4.606222
},

    {
    id:"personal-trainer-riina-fi",
    name:"Personal Trainer Riina",
    language:"Suomi",
    service:"Personal Trainer",
    country:"Espanja",
    city:"Fuengirola",
    address:"Fuengirola",
    description:"Suomenkielinen personal trainer Aurinkorannikolla.",
    website:"",
    instagram:"https://www.instagram.com/personaltrainerriina/",
    premium:false,
    lat:36.5390,
    lng:-4.6240
},

    {
    id:"with-marjo-fi",
    name:"With Marjo",
    language:"Suomi",
    service:"Personal Trainer",
    country:"Espanja",
    city:"Fuengirola",
    address:"Fuengirola",
    description:"Suomenkielinen personal trainer ja hyvinvointivalmentaja Costa del Solilla.",
    website:"www.withmarjo.fi",
    premium:false,
    lat:36.5391,
    lng:-4.6241
}



];
