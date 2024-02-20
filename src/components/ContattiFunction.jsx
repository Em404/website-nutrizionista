import React from "react";

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

function ContattiFunction() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.6719312472164!2d12.875916276442105!3d41.44633969233581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13250be96d36d763%3A0xad647ec55fba607!2sStudio%20Medico%20Nascosa%20S.R.L.!5e0!3m2!1sit!2sit!4v1708446501790!5m2!1sit!2sit"
          height="250"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-xl shadow-xl"
        ></iframe>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.7877539522515!2d12.47440007645731!3d41.832868268244226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258bcb3ae9d9fd%3A0xaff7b0cff493293a!2sStudio%20professionale%20di%20nutrizione%20Gaspa-Micheli!5e0!3m2!1sit!2sit!4v1708446909276!5m2!1sit!2sit"
          height="250"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-xl shadow-xl"
        ></iframe>
      </div>
    </div>
  );
}

export default ContattiFunction;
