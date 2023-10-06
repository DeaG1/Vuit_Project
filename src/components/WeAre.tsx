const weAreContent = {
  text: {
    heading: "Quem Somos Nós",
    description:
      "O Grupo Vuit surge da necessidade de expansão de uma grande operação já existente, orientada para a customização da gestão de seguros de vida, saúde, crédito consignado e benefícios às empresas e empregados. Focada na consultoria de seguros e benefícios, a Vuit quebra paradigmas no mercado atuando de forma disruptiva com conceitos colaborativos que promovem todo o ecossistema envolvido.",
  },
};

const WeAre = () => {
  return (
    <section className="py-25 p-20 flex translate-x-[20%] container px-4 mx-auto ">
      <div className="flex items-start space-x-0 lg:text-2xl">
        <div className="w-1/2">
          <h1 className="text-4xl lg:text-7xl font-bold text-primary mb-14">
            {weAreContent.text.heading}
          </h1>
          {weAreContent.text.description && (
            <p className="text-2xl lg:text-3xl mb-10">
              {weAreContent.text.description}
            </p>
          )}
          <div className="flex space-x-5 text-center">
            <a
              href="#_"
              className="py-5 px-10 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg inline-block relative top-0 hover:-top-1"
            >
              Saiba Mais
            </a>
          </div>
        </div>
        {/* Segunda div à direita */}
        <div className="w-1/2 ml-auto">{/* Conteúdo da segunda div */}</div>
      </div>
    </section>
  );
};

export default WeAre;
