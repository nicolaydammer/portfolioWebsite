import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export default function Layout({children}) {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
}
