import React from "react";
import { Image } from "@nextui-org/react";

function ChiSiamoFunction() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
        <div className="text-center md:text-left ms-4 md:me-16">
          <h2 className="font-semibold text-xl md:text-4xl lg:text-6xl">Dr. Gianluigi Gaspa</h2>
          <p className="mt-4">Biologo Nutrizionista</p>
          <p className="mt-8 text-lg lg:text-2xl">
            Sono Gianluigi Gaspa, nutrizionista laureato con lode presso la facoltà di Scienze dell’Alimentazione e della Nutrizione Umana del Campus
            Bio-Medico di Roma (UCBM). Ho maturato anni di esperienza presso i reparti di Endocrinologica e di Dietistica UCBM.
          </p>
          <p className="mt-4 text-lg lg:text-2xl">
            Mi sono occupato della valutazione della composizione corporea (massa magra, massa grassa e stato di idratazione), anamnesi nutrizionale e
            sviluppo dei piani nutrizionali in pazienti aderenti ai pacchetti metabolici del Policlinico UCBM. Svolgo attività di tutor didattico
            presso la facoltà Magistrale di Scienze dell’Alimentazione e della Nutrizione Umana dell’Università Campus Bio-Medico di Roma.
          </p>
          <p className="mt-4 text-lg lg:text-2xl">
            Partecipo attivamente alla pubblicazione di articoli scientifici. Sono membro del consiglio direttivo dell’Associazione di ricerca
            scientifica Tendi la Mano AIPOM Onlus. Svolgo attività privata in collaborazione con una serie di medici presso lo Studio Medico Nascosa
            di Latina e lo Studio Professionale di Nutrizione Gaspa-Micheli di Roma (Eur).
          </p>
        </div>
        <div>
          <Image
            src="https://studioprofessionaledinutrizione.it/wp-content/uploads/2022/11/gaspa-micheli-nutrizionista.jpg"
            shadow="md"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
        <div>
        <Image
            src="https://studioprofessionaledinutrizione.it/wp-content/uploads/2022/11/gaspa-micheli-nutrizionista.jpg"
            shadow="md"
          />
        </div>
        <div className="text-center md:text-left me-4 md:ms-16">
          <h2 className="font-semibold text-xl md:text-4xl lg:text-6xl">Dr.ssa Vanessa Micheli</h2>
          <p className="mt-4">Biologo Nutrizionista</p>
          <p className="mt-8 text-lg lg:text-2xl">
          Sono fermamente convinta che la motivazione possa far raggiungere grandissimi risultati.
          </p>
          <p className="mt-4 text-lg lg:text-2xl">
          Il mio obiettivo è quello di far acquisire gli strumenti necessari affinchè possa essere l’ultimo percorso nutrizionale intrapreso. Credo nell’approccio empatico al paziente, inclusivo e privo di giudizio volto a non tralasciare l’aspetto emotivo che ruota attorno a una sfera così complessa che è l’alimentazione.
          </p>
          <p className="mt-4 text-lg lg:text-2xl">
          Mi occupo in particolare di percorsi di dimagrimento oltre che di nutrizione applicata alle patologie (es. diabete, ipercolesterolemia, ipertensione, etc.). Seguo, inoltre, percorsi nutrizionali in condizioni fisiologiche come gravidanza, allattamento, menopausa, etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChiSiamoFunction;
