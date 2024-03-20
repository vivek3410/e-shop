import Navbar from "../Navbar"
import Footer from "../Footer"

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}