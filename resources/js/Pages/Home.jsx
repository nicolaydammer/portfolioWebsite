import {usePage, useRemember} from "@inertiajs/react";

export default function home() {
    const {success} = usePage().props

    const [isAlertVisible, setIsAlertVisible] = useRemember(true);

    success && setTimeout(() => {
        setIsAlertVisible(false);
    }, 3000);

    return <div className="container py-lg-5 h-100 d-flex flex-wrap align-items-md-center justify-content-center">
            {isAlertVisible && success && (<div className="alert alert-success">{success[0]}</div>)}
        <div className={"col-md-11"}>
            <h3>Introductie</h3>
            <img id={"programmingImg"} src={"img/programming.png"} alt={"programmingImg"}/>
            <p>
                Hallo, welkom op de portfoliowebsite van Nicolay Dammer. In deze portfoliowebsite wil ik je graag laten
                zien wie ik ben, waar ik heb gewerkt en wat voor thuisprojecten ik heb gemaakt.
            </p>
        </div>
    </div>
}
