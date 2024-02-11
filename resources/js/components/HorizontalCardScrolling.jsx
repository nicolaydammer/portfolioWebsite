import {CCard, CCardBody, CCardText, CCardTitle, CCarousel, CCarouselItem} from '@coreui/react'

export default function HorizontalCardScrolling() {

    const companies = [
        {
            id: 1,
            name: "ByYourSite B.V.",
            logo: "img/bys.png",
            url: "https://byyoursite.nl",
            function: "Junior Backend Developer",
            description: "Bugs oplossen en nieuwe features bouwen voor         klanten. Meehelpen met het verbeteren van de codebase. Unit Tests schrijven voor het makkelijker vinden van bugs. Voornamelijk gebruikte vaardigheden:\n" +
                "PHP, Laravel en git.\n",
            time: "12 uur per week"
        },
        {
            id: 2,
            name: "",
            logo: "img/logo GO.png",
            url: "https://gemeenteoplossingen.nl",
            function: "Junior Developer",
            description: "Bugs in software oplossen die zijn gerapporteerd door klanten, meehelpen met het ontwikkelen van nieuwe releases. Het herschrijven van oude code naar moderne code. Meedenken over verbeteringen van de workflow en producten. Voornamelijk gebruikte vaardigheden:\n" +
                "PHP, Mysql, Bash en Git.\n",
            time: "40 uur per week"
        },
        {
            id: 3,
            name: "",
            logo: "img/HR4YOU.png",
            url: "https://hr4you.de",
            function: "Junior Software Ontwikkelaar",
            description: "Het door ontwikkelen van het hoofdproduct eSearcher en inhouse tool voor het testen van producten door middel van BDD. Voornamelijk gebruik gemaakt van PHP, bash, git, behat.",
            time: "40 uur per week"
        },
        {
            id: 4,
            name: "",
            logo: "img/HR4YOU.png",
            url: "https://hr4you.de",
            function: "Stagiair ICT",
            description: "BDD tests maken, verbeteren door middel van Behat. Verder ontwikkelen van Behat. Gebruik gemaakt van PHP, docker, behat, bash scripts en git.",
            time: "40 uur per week"
        },
        {
            id: 5,
            name: "",
            logo: "img/vixada_logo23.png",
            url: "https://www.vixada.com/",
            function: "Stagiair ICT",
            description: "Twee open-source applicaties laten samenwerken door middel van eigen code ertussen te schrijven en API’s te gebruiken en het beheren van Linux servers.",
            time: "40 uur per week"
        },
        {
            id: 6,
            name: "",
            logo: "img/gemeente-groningen.svg",
            url: "https://gemeente.groningen.nl/",
            function: "Stagiair ICT",
            description: "Configureren van telefoons en laptops voor klanten. " +
                "Klanten helpen met hun technische vragen\n" +
                "Repareren en plaatsen van computers op locaties.\n" +
                "Administratie van alle werkzaamheden bijhouden.\n",
            time: "40 uur per week"
        },
    ]

    const list = companies.map(company => (
        <CCarouselItem key={company.id}>
            <CCard>
                <CCardBody>
                    <CCardTitle><a target={"_blank"} href={company.url}> <img className={"companyLogo"}
                                                                              src={company.logo}
                                                                              alt={"logo"}/></a>{company.name}
                    </CCardTitle>
                    <CCardText>
                        Functie: {company.function}<br/>
                        Aantal uren per week: {company.time}
                    </CCardText>
                    <div>{company.description}</div>
                </CCardBody>
            </CCard>
        </CCarouselItem>
    ))

    return <div className={"cvCarousel"}>
        <CCarousel touch controls interval={12000}>
            {list}
        </CCarousel>
    </div>
}
