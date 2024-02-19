import React from "react";
import { Image } from "@nextui-org/react";

const cities = [
  {
    id: 1,
    city: "Roma",
    details: [
      {
        address: "Viale della Musica 14, 00144 Roma",
        phone: "(+39) 327 384 2661",
        email: "info@studioprofessionalenutrizione.it",
      },
    ],
  },
  {
    id: 2,
    city: "Latina",
    details: [
      {
        address: "Studio Medico Nascosa, Largo G. B. Cirri, 6 – 04100 Latina LT",
        phone: "0773 601439",
        email: "info@studioprofessionalenutrizione.it",
      },
    ],
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
            <a href="#">Home</a>
            <a href="#">Chi Siamo</a>
            <a href="#">Servizi</a>
            <a href="#">Contatti</a>
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
