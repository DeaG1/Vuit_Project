const servicesContent = {
  heading: {
    headingTitle: "Nossos Serviços e Soluções",
    description:
      "Nós compreendemos que resguardar nossas empresas é de extrema importância. Por isso que nos dedicamos a fornecer soluções abrangentes, adaptadas às necessidades de cada um.",
  },
  items: [
    {
      title: "Seguro de Vida em Grupo e Acidentes Pessoais",
      description:
        "A Vuit Seguros é uma corretora que assessora as empresas, fornecendo seguro de vida em grupo e acidentes pessoais, permitindo que economizem tempo, esforço e dinheiro.",
    },
    {
      title: "Crédito Consignado",
      description:
        "Use sua empresa para oferecer o benefício de crédito consignado ao seu funcionário, com a facilidade de desconto em folha, juros a partir de 1,89% ao mês, parcelamento em até 48x e o melhor de tudo: após 3 dias do primeiro contanto o recurso já pode estar disponível na conta do colaborador.",
    },
    {
      title: "Seguro de Saúde, Dental e Telemedicina",
      description:
        "Trabalhamos em parceria com os empregadores para oferecer acordos que atendam às expectativas dos colaboradores em relação a benefícios como seguro saúde, odontológico e telemedicina, que são altamente desejados. Nosso objetivo é encontrar as melhores soluções, fornecer planos de qualidade, gerenciar a demanda e oferecer suporte pós-venda, contribuindo para o comprometimento dos funcionários com a empresa.",
    },
    {
      title: "Responsabilidade Civil e Prestação de Serviços",
      description:
        "Use sua empresa para oferecer o benefício de crédito consignado ao seu funcionário, com a facilidade de desconto em folha, juros a partir de 1,89% ao mês, parcelamento em até 48x e o melhor de tudo: após 3 dias do primeiro contanto o recurso já pode estar disponível na conta do colaborador.",
    },
    {
      title: "Seguro Garantia e Garantia Judicial",
      description:
        "Através da VUIT Seguros, você tem as garantias que precisa para fazer seu trabalho. Nossos clientes estão em primeiro lugar, e nossos profissionais são projetados para ajudar nas suas necessidades. Serviços especializados como garantia de proposta, garantia de execução, antecipação de pagamento ou garantia judicial, liberando os recursos imobilizados e este ajudando no fluxo de caixa da sua empresa.",
    },
    {
      title: "VUIT Benefícios: Vale Alimentação, Refeição e Combustível",
      description:
        "A Vuit benefícios está expandindo seus serviços em parceria com a Sodexo, a maior rede de Vale Alimentação e Vale Refeição do Brasil. Isso traz benefícios tanto para o RH da sua empresa, com isenções de encargos sociais e descontos no IR pelo PAT, quanto para seus colaboradores, que terão acesso a opções de alimentação saudável e conveniência com os cartões de benefícios aceitos em diversos estabelecimentos físicos e aplicativos de entrega. Isso resulta em mais qualidade de vida para todos.",
    },
  ],
};

const Services = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto text-center mb-20">
          <h2 className="text-heading text-4xl lg:text-7xl font-bold mb-5 text-primary">
            {servicesContent.heading.headingTitle}
          </h2>
          <p className="text-body leading leading-relaxed text-2xl lg:text-3xl">
            {servicesContent.heading.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
          {servicesContent.items.map((item) => (
            <div
              className="flex space-x-10 border border-primary bg-blue-100 p-4 rounded-2xl"
              key={item.title}
            >
              <div>
                <h3 className="text-heading font-bold text-primary text-md mb-3 text-3x1 lg:text-4xl">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-2x1 lg:text-1xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
