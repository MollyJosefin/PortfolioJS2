import React, { useState } from "react";
import "../styles/_globals.scss";

const projectsData = [
    {
        title: "Solaris - Galaxy Explorer",
        description: "En interaktiv planetsökare med API-integration, lokal lagring och CSS-animationer för en dynamisk och informativ rymdupplevelse.",
        fullDescription: `Galaxy Explorer var ett projekt där jag byggde en interaktiv planetsökare med HTML, CSS och Vanilla JavaScript. Webbplatsen låter användaren söka efter planeter och visa detaljerad information via ett externt API. Jag hanterade API-nyckeln dynamiskt med en POST-förfrågan, vilket säkerställer att den inte är hårdkodad. Planeterna representeras av interaktiva element med CSS-animationer för en mer levande användarupplevelse.
        \n
        Projektet gav mig djupare kunskap inom:
        \n
        - Asynkron API-hantering med fetch(), inklusive POST och GET.
        - DOM-manipulation för att dynamiskt uppdatera UI baserat på API-data.
        - Felhantering där användaren får återkoppling vid eventuella problem.
        - Local storage för att spara valda planeter och presentera dem på en ny sida.
        - CSS-animationer såsom hover-effekter, planetskuggor och stjärnhimmel för att skapa en atmosfärisk känsla.
        \n
        Det här projektet var en bra övning i att kombinera frontend-logik med externa datakällor, vilket gör det till en mer realistisk applikation.`,
        image: "/solaris.png",
        githubLink: "https://github.com/MollyJosefin/GalaxyExplorer", // Länk till GitHub
        liveDemoLink: "https://mollyjosefin.github.io/GalaxyExplorer/" // Länk till live-versionen
      },
  {
    title: "Cosmic Café – En intergalaktisk upplevelse i webbutveckling",
    description: "En stilren och futuristisk caféhemsida, skapad med HTML, CSS och flexbox för en responsiv och lekfull användarupplevelse. ",
    fullDescription: `Cosmic Café var ett av mina första projekt under utbildningen, där jag fick skapa en grundläggande webbsida från grunden. Uppgiften gick ut på att designa en futuristisk caféhemsida med en kosmisk känsla, vilket jag gjorde genom att kombinera HTML och CSS.
    \n
    Jag valde att använda Google Fonts för att implementera det pixliga och futuristiska typsnittet Silkscreen, vilket gav sidan en distinkt retrogaming-estetik.\n
    \n
    Genom projektet lärde jag mig:\n
    - Hur man strukturerar HTML med semantiska element.\n
    - Grundläggande CSS-styling för att skapa en distinkt visuell identitet.\n
    - Flexbox för att hantera layout och placera element korrekt.\n
    - Att använda Google Fonts och Material Symbols för att förstärka temat.`,
    image: "/cosmiccafe.png"
  },
  {
    title: "Trafikljus",
    description: "En enkel övning i CSS-layout och flexbox, stylade och centrera element för en responsiv och tillgänglig design. ",
    fullDescription: `Att skapa ett simpelt trafikljus var en övning som hjälpte mig förstå grunderna i CSS-styling och layout. Genom att använda HTML och CSS designade jag en trafikljuskomponent där varje lampa representeras av en div-sektion.
    \n
    För att centrera trafikljuset på sidan använde jag flexbox, vilket gör det enkelt att placera element både horisontellt och vertikalt. Varje ljus (red, yellow, green) fick sin egen färg och en kant i en mörkare nyans för att skapa en mer realistisk effekt. Jag lärde mig också vikten av tillgänglighet genom att inkludera aria-labels, vilket gör att skärmläsare kan identifiera trafikljuset korrekt.
    \n
    Genom denna uppgift fick jag en djupare förståelse för:
    \n
    - Grundläggande CSS-layout med flexbox.
    - Hur man stylar element individuellt genom klasser.
    - Semantisk HTML och tillgänglighet med aria-labels.
    - Att använda bakgrundsfärger och kantlinjer för att skapa djup och kontrast.
    \n
    Det här projektet var en bra start för att lära sig struktur och designprinciper inom webbutveckling!`,
    image: "/ecommerce-image.jpg"
  },
  {
    title: "Timer",
    description: "En dynamisk React-timer byggd med hooks och state-hantering för att skapa realtidsuppdateringar och interaktiv tidshantering. ",
    fullDescription: `Att skapa en timer var ett perfekt projekt för att förstå och arbeta med Reacts state-hantering och hooks. Jag använde useState för att hålla koll på tiden och om timern var aktiv, samt useEffect för att hantera intervallen och uppdatera tiden i realtid. För att optimera prestandan använde jag useRef för att lagra referensen till intervallet utan att orsaka onödiga renderingar.
    \n
    För att skapa en smidig och stilren design använde jag CSS med flexbox för att centrera innehållet och implementerade små hover-effekter för knapparna. Timern kan startas, pausas och återställas, och tiden formateras korrekt ner till millisekunder.
    \n
    Genom detta projekt lärde jag mig:
    \n
    - useState och useEffect för att hantera realtidsuppdateringar.
    - useRef för att spara en intervallreferens och undvika oönskade uppdateringar.
    - Hur man skapar enkel interaktivitet med React och hanterar användarinmatning.
    - Grundläggande styling med CSS för att skapa en responsiv och modern UI.
    \n
    Detta projekt gav mig en djupare förståelse för React-hooks och komponenttänk, vilket är grunden för mer komplexa interaktiva applikationer.`,
    image: "/blog-image.jpg"
  }
];

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  return (
    <>
      {/* Wave Top */}
      <div className="wave-container">
        <div className="wave light-2"></div>
      </div>

      <div className="projects-container">
        <h1>Här kan du se mina olika projekt, både från skolan och personliga initiativ.</h1>

        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className={`project-item ${openProject === index ? "expanded" : ""}`} 
              onClick={() => setOpenProject(openProject === index ? null : index)}
            >
              <div className="project-header">
                <h2>{project.title}</h2>
                <img src={project.image} alt={project.title} className="project-image" />
              </div>

              {/* Kort beskrivning syns alltid på desktop men försvinner på mobil */}
              <h3 className="short-description">{project.description}</h3>

              {/* Lång beskrivning syns när projektet är öppet */}
              {openProject === index && (
                <div className="project-description">
                {project.fullDescription.split("\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
            ))}
            </div>
            )}

            </div>
          ))}
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="wave-container">
        <div className="wave light-3"></div>
      </div>
    </>
  );
};

export default Projects;
