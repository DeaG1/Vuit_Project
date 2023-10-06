import Image from "next/image";
import Link from "next/link";

const heroContent = {
  text: {
    heading: "Bem-Vindo ao Grupo Vuit",
    description:
      "Possibilitamos empresas a terem seus negócios preservados e a serem mais competitivas",
  },
  images: {
    img1: "/images/foto1.svg",
    img2: "/images/foto2.svg",
    img3: "/images/foto3.svg",
    img4: "/images/foto4.svg",
    img5: "/images/foto5.svg",
  },
};

const Hero = () => {
  return (
    <section className="py-20 px-20">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="w-5/12 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-7xl font-bold text-primary mb-14">
              {heroContent.text.heading}
            </h1>
            {heroContent.text.description && (
              <p className="text-2xl lg:text-4xl font-bold text-primary mb-10">
                {heroContent.text.description}
              </p>
            )}
            <div className="flex space-x-3">
              <Link
                href="#_"
                className="py-5 px-10  items-start space-x-7 lg:text-2xl bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-1"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
          <div className="lg:w-6/12 space-y-2">
            <div className="flex space-x-2 items-stretch">
              <div className="w-8/12">
                {heroContent.images.img1 && (
                  <Image
                    src={heroContent.images.img1}
                    width={397}
                    height={406}
                    alt="image1"
                    layout="responsive"
                    className="object-cover h-full w-full rounded-2xl"
                  />
                )}
              </div>
              <div className="w-4/12 self-end space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {heroContent.images.img2 && (
                    <div>
                      <Image
                        src={heroContent.images.img2}
                        width={437}
                        height={437}
                        alt="imagem 2"
                        className="object-cover h-full w-full rounded"
                      ></Image>
                    </div>
                  )}
                  <div className="bg-primary rounded-2xl rounded-tr-[200px]"></div>
                </div>
                {heroContent.images.img3 && (
                  <div>
                    <Image
                      src={heroContent.images.img3}
                      width={374}
                      height={392}
                      alt="imagem 3"
                      className="object-cover h-full w-full rounded-2xl"
                    ></Image>
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="flex space-x-2">
                <div className="w-4/12">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-primary rounded-2xl rounded-bl-[200px]"></div>
                    {heroContent.images.img4 && (
                      <div>
                        <Image
                          src={heroContent.images.img4}
                          width={394}
                          height={394}
                          alt="imagem 4"
                          className="object-cover h-full w-full rounded-2xl"
                        ></Image>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-5/12">
                  {heroContent.images.img5 && (
                    <Image
                      src={heroContent.images.img5}
                      width={446}
                      height={495}
                      alt="imagem 5"
                      className="object-cover h-full w-full rounded-2xl"
                    ></Image>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
