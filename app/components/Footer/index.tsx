import Link from "next/link";
import { Container } from "../Container";
import { FooterList } from "./FooterList";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {

    const shopCategoriesList = [
        {
            title: "Phones",
            href: "/phones"
        },
        {
            title: "Laptops",
            href: "/laptops"
        },
        {
            title: "Desktops",
            href: "/desktops"
        },
        {
            title: "Watches",
            href: "/watches"
        },
        {
            title: "Accesories",
            href: "/accesories"
        }
    ]

    const customerServicesList = [
        {
            title: "Contact Us",
            href: "/contact-us"
        },
        {
            title: "Shipping",
            href: "/shipping"
        },
        {
            title: "Returns",
            href: "/returns"
        },
        {
            title: "FAQ",
            href: "/faq"
        }
    ]

    return (
        <footer className="bg-slate-700 text-slate-200 text-sm">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8 ">
                    <FooterList>
                        <h3 className="text-base font-bold mt-2">Shop Categories</h3>
                        {shopCategoriesList.map((category, index) => (
                            <Link href={category.href} key={index}>{category.title}</Link>
                        ))}
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mt-2">Customer Services</h3>
                        {customerServicesList.map((category, index) => (
                            <Link href={category.href} key={index}>{category.title}</Link>
                        ))}
                    </FooterList>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-base font-bold">About Us</h3>
                        <p className="mb-2">At our electronics store,we are dedicated to providing latest and greatest devices and accessories to our customer. With a wide selection of phones,TVs,Laptops,Watches and Accesories.</p>
                        <p>&copy; {new Date().getFullYear()} E~Shop. All rights Reserved</p>
                    </div>
                    <FooterList>
                        <h3 className="text-base font-bold">Fallow Us</h3>
                        <div className="flex gap-2">
                            <Facebook  />
                            <Instagram />
                            <Twitter />
                            <Youtube />
                        </div>
                    </FooterList>

                </div>
            </Container>
        </footer>
    )
}

export default Footer;