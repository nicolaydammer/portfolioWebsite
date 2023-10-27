import HorizontalCardScrolling from "../components/HorizontalCardScrolling.jsx";

export default function cv() {
    return <div className="container py-lg-5 h-100 d-flex flex-wrap align-items-md-center justify-content-center">
        <div className={"scrollRootWrapper"}>
            <HorizontalCardScrolling></HorizontalCardScrolling>
        </div>
    </div>
}
