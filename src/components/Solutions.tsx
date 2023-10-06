import Image from "next/image";
import Link from "next/link";

const solutionContent = {
  text: {
    headingTitle2: "Venha nos Conhecer",
    headingTitle: "Benefícios para Colaboradores ",
    description:
      "A Vuit benefícios está expandindo sua oferta de produtos através de uma parceria com a Sodexo, a maior rede de Vale Alimentação e Vale Refeição do Brasil. Essa parceria beneficia tanto o departamento de Recursos Humanos das empresas, que podem receber isenções de encargos sociais e descontos no Imposto de Renda pelo PAT ao oferecer vale-alimentação e vale-refeição Sodexo, quanto os colaboradores, que têm acesso a opções de alimentação saudável. Os cartões de benefícios são aceitos em estabelecimentos físicos e aplicativos de entrega, proporcionando mais qualidade de vida para todos. Além disso, a gestão dos benefícios é feita de forma online, com praticidade, segurança e controle de gastos.",
  },
  cta: {
    btn: {
      href: "#_",
      label: "Saiba Mais",
    },
  },
  images: {
    img1: "/images/Rectangle 1.jpg",
    img2: "/images/Rectangle 2.jpg",
    img3: "/images/Rectangle 3.jpg",
  },
  experience: {
    year: "10+",
    label: "Anos de Mercado",
  },
};

const Solutions = () => {
  return (
    <section className="py-32 bg-light overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="lg:flex space-x-2 justify-between">
          <div className="w-6/ mb-10 lg:mb-0 z-10">
            <div className="flex gap-2">
              <div className="flex flex-col space-y-2">
                <div>
                  <Image
                    src={solutionContent.images.img1}
                    width={626}
                    height={640}
                    className="object-cover h-full w-full rounded-lg"
                    alt="imagem 1"
                  ></Image>
                </div>

                <div className="flex justify-end gap-2">
                  <div className="w-4/12 flex">
                    <div className="ml-auto">
                      <div className="bg-primary w-10 h10 lg:w-24 lg:h-24 rounded-3xl rounded-bl-[200px]"></div>
                    </div>
                  </div>
                  <div className="w-6/12">
                    <Image
                      src={solutionContent.images.img3}
                      width={626}
                      height={640}
                      className="object-cover h-full w-full rounded-lg"
                      alt="imagem 3"
                    ></Image>
                  </div>
                </div>
              </div>
              {/*end col*/}
              <div className="">
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="bg-primary w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px] mt-[150px]"></div>
                  </div>
                  <div>
                    <Image
                      src={solutionContent.images.img2}
                      width={547}
                      height={573}
                      alt="imagem 3"
                      className="object-cover h-full w-full rounded-3xl shadow-2xl"
                    ></Image>
                  </div>
                  {solutionContent.experience.label && (
                    <div>
                      <div className="p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5">
                        <strong className="block font-bold text-primary text-xl lg:text-5xl">
                          {solutionContent.experience.year}
                        </strong>
                        <span className="text-primary text-xl lg:text-2xl">
                          {solutionContent.experience.label}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-6/12 relative z-10 right-90 translate-x-[10%]">
            <h2 className="text-heading text-4xl lg:text-7xl font-bold mb-5 text-primary">
              {solutionContent.text.headingTitle}
            </h2>
            <p className="text-body leading-relaxed mb-10 text-2xl lg:text-3xl">
              {solutionContent.text.description}
            </p>
            <Link
              href="#_"
              className="py-5 px-10 items-start space-x-7 lg:text-2xl bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-1"
            >
              Saiba Mais
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
