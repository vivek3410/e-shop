import Link from "next/link";
import { Container } from "../Container";
import { Redressed } from "next/font/google";

const reddressed = Redressed({ subsets: ["latin"], weight: ['400'] })

const Navbar = () => {
    return (
        <div className="sticky top-0 w-full bg-slate-200 shadow-sm z-30">
            <Container>
                <div className="flex items-center justify-between py-4 gap-3 md:gap-0">
                    <Link href={"/"} className={`${reddressed.className} text-2xl font-bold`}>E-Shop</Link>
                    <div className="hidden md:block">Search</div>
                    <div className="flex items-center gap-8 md:gap-12">
                        <div>Cartcount</div>
                        <div>usermenu</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar;