import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const statContent = {
  stats: [
    {
      number: "100%",
      label: "Seguro Conosco",
    },
    {
      number: "5938",
      label: "Clientes Ativos",
    },
    {
      number: "5,0%",
      label: "Avaliação",
    },
  ],
};

const Stats = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  });
  return (
    <section className="pt-20 pb-20">
      <div className="container px-5 mx-auto">
        <div className="justify-evenly items-center ">
          <div className="w-full mb-20 lg:mb-0 ">
            <div className="grid grid-cols-3">
              {statContent.stats.map((stat, idx) => {
                idx *= 100;
                return (
                  <div
                    className="text-center xl:text-[30px] text-primary"
                    key={stat.label}
                    data-aos="fade-up"
                    data-aos-delay={idx}
                  >
                    <strong className="text-primary text-4xl xl:text-[80px] font-bold block leading-tight">
                      {stat.number}
                    </strong>
                    <span>{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
