import React, { Fragment } from "react";

const contacts = [
  {
    id: 1,
    city: "Roma",
    city_icon: <i class="fa-solid fa-location-dot"></i>,
    address: "Viale della Musica 14, 00144 Roma",
    gmaps: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.7877539522515!2d12.47440007645731!3d41.832868268244226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258bcb3ae9d9fd%3A0xaff7b0cff493293a!2sStudio%20professionale%20di%20nutrizione%20Gaspa-Micheli!5e0!3m2!1sit!2sit!4v1708446909276!5m2!1sit!2sit"
        height="250"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full rounded-xl shadow-xl"
      ></iframe>
    ),
    phone: "(+39) 327 384 2661",
    phone_icon: <i class="fa-solid fa-phone"></i>,
    email: "info@studioprofessionalenutrizione.it",
    email_icon: <i class="fa-solid fa-envelope"></i>,
  },
  {
    id: 2,
    city: "Latina",
    city_icon: <i class="fa-solid fa-location-dot"></i>,
    address: "Studio Medico Nascosa, Largo G. B. Cirri 6, 04100 Latina",
    gmaps: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.6719312472164!2d12.875916276442105!3d41.44633969233581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13250be96d36d763%3A0xad647ec55fba607!2sStudio%20Medico%20Nascosa%20S.R.L.!5e0!3m2!1sit!2sit!4v1708446501790!5m2!1sit!2sit"
        height="250"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full rounded-xl shadow-xl"
      ></iframe>
    ),
    phone: "0773 601439",
    phone_icon: <i class="fa-solid fa-phone"></i>,
    email: "info@studioprofessionalenutrizione.it",
    email_icon: <i class="fa-solid fa-envelope"></i>,
  },
];

const hours = [
  {
    day: "Lunedì",
    hour: "9:00-13:00 e 16:00-18:00"
  },
  {
    day: "Martedì",
    hour: "9:00-13:00 e 15:00-17:00"
  },
  {
    day: "Mercoledì",
    hour: "15:00-19:00"
  },
  {
    day: "Venerdì",
    hour: "10:00-12:00 e 15:00-17:00"
  },
  {
    day: "Sabato",
    hour: "9:00-13:00"
  }
]

const getContacts = () => {
  return (
    <Fragment>
      {contacts.map((contact) => (
        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:w-4/5 mb-4 lg:mb-0">{contact.gmaps}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
              <div>
                <div>
                  <p className="text-lg">
                    <span className="text-green-600 me-2">{contact.city_icon}</span>
                    {contact.city}
                  </p>
                  <p className="text-md ms-6">{contact.address}</p>
                </div>
                <div className="py-4">
                  <p className="text-lg">
                    <span className="text-green-600 me-2">{contact.phone_icon}</span>
                    Telefono
                  </p>
                  <p className="text-md ms-7">{contact.phone}</p>
                </div>
                <div>
                  <p className="text-lg">
                    <span className="text-green-600 me-2">{contact.email_icon}</span>
                    Email
                  </p>
                  <p className="text-md ms-7 break-words">{contact.email}</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-lg"><span className="text-green-600 me-2"><i class="fa-solid fa-clock"></i></span>Orari della Segreteria</p>
                {getHours()}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

const getHours = () => {
  return (
    <Fragment>
      {hours.map((hour) => (
        <div className="ms-7">
          <p className="">{hour.day}</p>
          <p>{hour.hour}</p>
        </div>
      ))}
    </Fragment>
  );
};

function ContattiFunction() {
  return (
    <div className="container mx-auto px-4 md:px-6 divide-y divide-green-600">
      {getContacts()}
    </div>
  );
}

export default ContattiFunction;
