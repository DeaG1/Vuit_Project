import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";

const footerContent = {
  about: {
    logo: "/images/logo.svg",
    description:
      "Possibilitamos empresas a terem seus negócios preservados e a serem mais competitivas",
  },
  footerLinks: [
    {
      heading: "Serviços",
      links: [
        {
          href: "#_",
          label: "Seguro de Vida em Grupo e Acidentes Pessoais",
        },
        {
          href: "#_",
          label: "Seguro de Saúde, Dental e Telemedicina",
        },
        {
          href: "#_",
          label: "Responsabilidade Civil e Prestação de Serviços",
        },
        {
          href: "#_",
          label: "Crédito Consignado",
        },
        {
          href: "#_",
          label: "Seguro Garantia e Garantia Judicial",
        },
        {
          href: "#_",
          label: "VUIT Benefícios: Vale Alimentação, Refeição e Combustível",
        },
      ],
    },
    {
      heading: "Políticas",
      links: [
        {
          href: "#_",
          label: "Política de Privacidade",
        },
        {
          href: "#_",
          label: "Política de Cookies",
        },
      ],
    },
  ],
  contact: {
    heading: "Contatos",
    address: "Rua Pasteur, 463 - Água Verde - 13° Andar, Curitiba - PR",
    phone: "(41) 2101-1724",
    email: "contato@vuit.com.br",
    instagram: "@vuitcred",
    youtube: "youtube.com/@grupovuit",
    linkedin: "linkedin.com/company/vuit/",
    facebook: "facebook.com/vuitadvice",
  },
  copyright: {
    labelOne: "© 2023 Grupo Vuit. Todos os Direitos Reservados.",
    labelTwo: "Webdesign e Desenvolvimento realizado por Rômulo do Prado.",
  },
};

const Footer = () => {
  return (
    <footer role="contentinfo" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="block lg:flex gap-20 mb-10 pb-10">
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src={footerContent.about.logo}
                width={600}
                height={100}
                alt="logo"
              ></Image>
            </Link>
            <p className="leading-relaxed mb-7 w-7/12 text-2xl lg:text-2xl text-primary ml-10">
              {footerContent.about.description}
            </p>
          </div>
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 gap-10">
              {footerContent.footerLinks.map((footerLink, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-heading mb-5">
                    {footerLink.heading}
                  </h3>
                  <ul className="p-0 m-0">
                    {footerLink.links.map((link, idx) => (
                      <li className="mb-3" key={idx}>
                        <Link
                          href={link.href}
                          className="group-flex items-center duration-300 transition-all ease-in-out hover:text-primary"
                        >
                          <span>{link.label}</span>
                          <span className="left-2 relative duration-300 transition-all ease-in-out">
                            <BiChevronRight className="text-xl" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-4/12">
            <h3 className="font-bold text-heading mb-5">
              {footerContent.contact.heading}
            </h3>
            <ul>
              <li className="flex items-start space-x-3 mb-5">
                <HiLocationMarker className="text-xl text-primary" />
                <span>{footerContent.contact.address}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <HiPhone className="text-xl text-primary" />
                <span>{footerContent.contact.phone}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <MdEmail className="text-xl text-primary" />
                <span>{footerContent.contact.email}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <BsInstagram className="text-xl instagram-icon" />
                <span>{footerContent.contact.instagram}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <BsFacebook className="text-xl facebook-icon" />
                <span>{footerContent.contact.facebook}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <BsLinkedin className="text-xl linkedin-icon" />
                <span>{footerContent.contact.linkedin}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <BsYoutube className="text-xl youtube-icon" />
                <span>{footerContent.contact.youtube}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-10 border-t border-gray-200">
          <p>
            {footerContent.copyright.labelOne}
            {"  "}
            {footerContent.copyright.labelTwo}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
