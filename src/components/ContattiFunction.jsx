import React from 'react';

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

function ContattiFunction(props) {
  return (
    <div>Contatti</div>
  );
}

export default ContattiFunction;