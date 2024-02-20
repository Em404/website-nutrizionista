import React from "react";
import { Image } from "@nextui-org/react";

const footerItems = [
  {
    id: 1,
    link: "Home",
    path: "/home",
  },
  {
    id: 2,
    link: "Chi Siamo",
    path: "/chi-siamo",
  },
  {
    id: 3,
    link: "Servizi",
    path: "/servizi",
  },
  {
    id: 4,
    link: "Contatti",
    path: "/contatti",
  },
];

function CustomFooterFunction() {

  return (
    <div className="bg-green-600 text-white py-5">
      <div className="container mx-auto px-4 divide-y divide-white">
        <div className="grid grid-cols-1 md:grid-cols-2 py-5">
          <div className="mb-5 md:mb-0 text-center">
            <Image
              src="https://studioprofessionaledinutrizione.it/wp-content/uploads/2022/10/logo-gaspa-micheli-salvia.png"
              width={180}
              height={180}
            />
          </div>
          <div className="grid grid-cols-4 text-center">
            {footerItems.map((item) => (
              <a href={item.path} className={`w-full cursor-pointer`}>{item.link}</a>
            ))}
            {/* <a href="#">Home</a>
            <a href="#">Chi Siamo</a>
            <a href="#">Servizi</a>
            <a href="#">Contatti</a> */}
          </div>
        </div>
        <div className="text-center py-5">
          2024 | Copyright ©{" "}
          <a href="#" className="italic">
            Emanuele Macchiarulo
          </a>
        </div>
      </div>
    </div>
  );
}

export default CustomFooterFunction;
