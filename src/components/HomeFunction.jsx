import React from "react";
import {Image} from "@nextui-org/react";

function HomeFunction() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-80 md:h-96 xl:h-screen flex items-center justify-center lg:py-60"
        style={{ backgroundImage: 'url("https://studioprofessionaledinutrizione.it/wp-content/uploads/2022/09/prenotazione-gaspa.jpg")' }}
      >
        <div className="text-white text-center font-semibold">
          <p className="text-lg md:text-2xl lg:text-4xl">Studio Professionale di Nutrizione</p>
          <h1 className="text-3xl md:text-6xl lg:text-8xl">GASPA - MICHELI</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 py-4 md:py-12 text-center text-xl md:text-2xl">
        <p>
          Dall’unione professionale e privata dei due fondatori nasce lo studio Professionale di Nutrizione{" "}
          <span className="font-semibold">Gaspa-Micheli</span>
        </p>
      </div>
      <div className="container mx-auto px-4 md:px-12 py-4 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
          <Image
            src="https://studioprofessionaledinutrizione.it/wp-content/uploads/2022/11/gaspa-micheli-nutrizionista.jpg"
            shadow="md"
          />
          </div>
          <div className="text-center md:text-left me-4 md:ms-16 py-8 md:py-0">
            <h2 className="font-semibold text-xl md:text-2xl lg:text-4xl">“Una corretta alimentazione è la medicina del futuro”</h2>
            <p>LINUS CARL PAULING</p>
            <p className="mt-8 text-lg xl:text-2xl">Siamo i dottori Gianluigi Gaspa e Vanessa Micheli, biologi nutrizionisti.</p>
            <p className="mt-4 text-lg xl:text-2xl">
              Il nostro obiettivo è quello di guidare, con un approccio empatico, il paziente alla modifica dei propri stili alimentari senza doversi
              sentire ristretto in rigidi schemi alimentari allineandoci ai suoi fabbisogni senza tralasciare le necessità personali (es. orari di
              lavoro, sport, mense lavorative, etc.)
            </p>
            <p className="mt-4 text-lg xl:text-2xl">
              Ci occupiamo prevalentemente di nutrizione clinica e percorsi di dimagrimento applicando tutte le nozioni medico-scientifiche più
              aggiornate.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 py-4 md:py-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl mb-4 font-semibold">Percorso Ambulatoriale</h2>
          <h4 className="text-lg md:text-2xl mb-8">Analizziamo lo stato di salute con un’accurata anamnesi tramite esami strumentali</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-8">
          <div className="text-center">
            <Image
            src="https://studioprofessionaledinutrizione.it/wp-content/uploads/2022/09/prima-visita-scaled.jpg"
            shadow="md"
          />
            <h4 className="py-8 text-xl font-semibold">Prima Visita</h4>
            <p className="text-lg">
              La prima visita dura circa un’ora. Vengono misurati i dati antropometrici (peso, altezza e circonferenza vita) e vengono svolti due
              esami strumentali: bioimpedenziometria (Akern 101 BIVA) ed adipometria (Bodymetrix BX2000), volti rispettivamente ad analizzare la
              composizione corporea (massa magra, massa grassa e stato di idratazione) e valutazione stratigrafica addominale (spessore grasso
              addominale e muscolare). In seguito verranno appuntate le preferenze culinarie del paziente in maniera tale da poter sviluppare un piano
              personalizzato. Il piano alimentare verrà inoltrato via mail entro 5 giorni lavorativi.
            </p>
          </div>
          <div className="text-center">
            <Image
            src="https://studioprofessionaledinutrizione.it/wp-content/uploads/2022/09/prima-visita-paziente-scaled.jpg"
            shadow="md"
          />
            <h4 className="py-8 text-xl font-semibold">Controllo Nutrizionale</h4>
            <p className="text-lg">
              Dopo un mese dall’inizio del piano alimentare è calendarizzato un controllo nutrizionale della durata di 40-45 minuti circa. In questo
              contesto si svolgono gli esami strumentali (bioimpedenziometria + adipometria) per valutare in maniera accurata la variazione della
              composizione corporea e confrontarci sull’aderenza del piano. In caso di eventuali modifiche da apportare al menù, il nuovo piano verrà
              aggiornato ed inviato via mail (inoltrato entro 5 giorni lavorativi).
            </p>
          </div>
          <div>
            <Image
            src="https://studioprofessionaledinutrizione.it/wp-content/uploads/2022/09/segreteria-scaled.jpg"
            shadow="md"
          />
            <h4 className="py-8 text-xl text-center font-semibold">Cosa Portare</h4>
              <ul className="list-disc text-lg ms-6">
                <li>Esami del sangue più recenti (entro 8-10 mesi);</li>
                <li>Presentarsi a digiuno (2-3 ore);</li>
                <li>Referti medici inerenti eventuali patologie in corso.</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFunction;
