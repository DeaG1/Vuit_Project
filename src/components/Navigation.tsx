import Image from "next/image";
import Link from "next/link";

const navigationMenu = [
  {
    href: "#",
    label: "HOME",
  },
  {
    href: "#",
    label: "SOBRE NÓS",
  },
  {
    href: "#",
    label: "SERVIÇOS",
  },
  {
    href: "#",
    label: "CONTATO",
  },
];

const Navigation = () => {
  return (
    <div>
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            {/*Logo*/}
            <div>
              <Link href="/">
                <Image
                  src="images/logo.svg"
                  alt="Vuit Logo"
                  width={350}
                  height={100}
                />
              </Link>
            </div>
            {/*Navigation Bar*/}
            <div>
              <ul className="flex items-start space-x-7 lg:text-2xl">
                {navigationMenu.map((item, idx) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/*CTA*/}
            <div>
              <Link
                href="#"
                className="px-5 py-4 items-start space-x-7 lg:text-2xl bg-primary text-white rounded-lg lg:inline-block duration-300 transition-all ease-in-out hover:bg[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-1"
              >
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
