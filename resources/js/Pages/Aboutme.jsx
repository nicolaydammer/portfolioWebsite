export default function aboutme() {
    const birthdate = new Date("1997/03/16");
    const difference = Date.now() - birthdate.getTime()
    const age = new Date(difference)

    let years = Math.abs(age.getUTCFullYear() - 1970).toString()

    return <div className="container py-lg-5 h-100 d-flex flex-wrap align-items-md-center justify-content-center">
        <div className={"col-md-11"}>

            <div id={"aboutme"}>
                <img id={"linkedinprofilepic"} src={"img/linkedinprofilepic.png"} alt={"linkedin profile picture"}></img>
                <h2>Wie ben ik?</h2>
                <p>Mijn naam is Nicolay Dammer, ik ben {years} jaar oud. Geboren en getogen in Winschoten.
                    <br/>In mijn vrije tijd mag ik graag werken aan computers of programmeer ik aan een persoonlijk
                    project.
                    <br/>Mocht ik daar niet mee bezig zijn dan ben ik meestal aan het gamen samen met vrienden.
                    <br/>Af en toe ook langs de waterkant te vinden met een vishengel.
                </p>
                <h2>Wat is mijn ervaring?</h2>
                <p>
                    Ik heb voornamelijk gewerkt met PHP en javascript bij verschillende bedrijven. Daarnaast mag ik ook graag werken met bash om iets te automatiseren.
                    <br/>Naast programmeren heb ik ook veel ervaring zelf opgedaan in het DevOps gebied, waarbij ik mijn eigen server heb opgezet en ze op maat heb ingesteld.
                    <br/>In PHP heb ik veel gebruikt gemaakt van het Laravel framework waarbij ik veel bezig ben geweest met API's bouwen.
                    <br/>Daarbij heb ik me ook bezig gehouden met databases en het ontwerpen van een structuur voor nieuwe functionaliteiten.
                    <br/>Natuurlijk kunnen we niet zonder een frontend en daarbij heb ik veel gebruik gemaakt van html/css/javascript met daarbij de ReactJS framework.
                </p>
                <h2>Hoe ben ik een developer geworden?</h2>
                <p>Na mijn middelbareschool ben ik begonnen met een ICT Beheerder opleiding. Daarbij heb ik kennis opgedaan over helpdesks en servers opzetten.
                    <br/>Ik heb ook nog een half jaar stage gelopen bij Gemeente Groningen waar ik voornamelijk 1e lijns werk heb gedaan.
                    <br/>Deze opleiding heb ik niet afgemaakt, omdat na de stage mijn intresse ging naar het programmeren.
                    <br/>Nadat ik van opleiding ben veranderd heb ik in 3 jaar tijd mijn MBO niv. 4 opleiding Applicatie Ontwikkelaar afgerond.
                    <br/>Daarbij heb ik stage gelopen bij Vixada waar ik heb geleerd hoe je een applicatie in een docker container kan bouwen en hoe je met javascript AJAX calls kunt doen.
                    <br/>Mijn tweede stage was bij HR4YOU in Duitsland waar ik heb gewerkt aan de automatisering van BDD(behaviour driven development) tests.
                    <br/>Dit is met PHP, Docker, Bash en Behat gemaakt.
                </p>
            </div>
        </div>
    </div>
}
