import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";

// library.add(...fas);

function ServiziFunction() {
  const services = [
    {
      icon: <i class="fa-solid fa-spoon fa-lg"></i>,
      title: "Visita Nutrizionale",
      subtitle: "",
    },
    {
      icon: <i class="fa-solid fa-square-poll-vertical fa-lg"></i>,
      title: "Bioimpedenza",
      subtitle: "",
    },
    {
      icon: <i class="fa-solid fa-gauge-high fa-lg"></i>,
      title: "Adipometria",
      subtitle: "",
    },
    {
      icon: <i class="fa-solid fa-scale-unbalanced fa-lg"></i>,
      title: "Percorso Dimagrimento",
      subtitle: "",
    },
    {
      icon: <i class="fa-solid fa-person-pregnant fa-lg"></i>,
      title: "Alimentazione in Gravidanza",
      subtitle: "",
    },
    {
      icon: <i class="fa-solid fa-brain fa-lg"></i>,
      title: "Educazione Alimentare",
      subtitle: "",
    },
    {
      icon: <i class="fa-solid fa-child-reaching fa-lg"></i>,
      title: "Alimentazione Infantile",
      subtitle: "(dagli 8 anni in poi)",
    },
  ];

  const getServices = () => {
    return (
      <Fragment>
        {services.map((service) => (
          <div className="py-8">
            <div className="text-8xl text-green-600 py-8">
              {service.icon}
            </div>
            <p className="text-lg lg:text-2xl">{service.title}</p>
            <p className="text-md lg:text-lg">{service.subtitle}</p>
          </div>
        ))}
      </Fragment>
    );
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="bg-gray-100 my-16 rounded-xl shadow-xl">
        <div className="text-center py-16 px-32">
          <h2 className="font-semibold text-xl md:text-4xl lg:text-6xl">Servizi Offerti</h2>
          <p className="mt-8 text-lg lg:text-2xl">
            Un ambiente professionale ma allo stesso tempo accogliente, un team di professionisti altamente formati ma allo stesso tempo empatici, per
            offrire un percorso di benessere e cura centrato sulla persona.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3">{getServices()}</div>
        </div>
      </div>
    </div>
  );
}

export default ServiziFunction;
