import React from "react";
import "../styles/_globals.scss";
const profileImage = "/profile-image.jpg"; // Sökvägen till min bild

const Home = () => {
  return (
    <>
      <div className="wave-container">
        <div className="wave light-2"></div>
      </div>

      <section className="layout-container">
        {/* Vänster kolumn - Text */} 
        <div className="layout-left">
        <section className="layout-section">
          <h1>Välkommen till mitt Portfolio!</h1>
          <p>Jag heter <strong>Molly Arnaryd</strong> och är en driven frontendutvecklare under utbildning med en kreativ och lösningsorienterad inställning. 
            Med en bakgrund inom <strong>kundbemötande, onboarding och digitalt innehållsskapande</strong> har jag utvecklat en stark känsla för <strong>användarupplevelse och effektiv kommunikation.</strong></p>

          <p>Just nu studerar jag <strong>Frontend Development på KYH</strong>, där jag fördjupar mig i teknologier som <strong>HTML, CSS, JavaScript och UX-design</strong>. 
            Jag har en passion för att skapa <strong>engagerande och användarvänliga webbupplevelser</strong>, och jag trivs bäst när jag får kombinera kod med kreativitet.</p>

          <p>Utöver mina studier har jag erfarenhet av att hantera onboarding av produkter och utbilda kunder i digitala plattformar, samt att arbeta i teams där jag tar <strong>stort ägandeskap över mina uppgifter och att hitta innovativa lösningar. </strong> 
            Jag har även flera års erfarenhet av att driva en YouTube-kanal och streama live på Twitch, vilket har <strong>stärkt min tekniska kompetens, problemlösningsförmåga och min förmåga att engagera en publik.</strong></p>

          <p>Denna portfolio är en samling av mina projekt – från skoluppgifter till egna kreativa initiativ. <strong>Jag strävar alltid efter att utvecklas</strong>, och jag ser fram emot att dela min resa med dig!</p>
        </section>
        </div>

        {/* Höger kolumn - Bild på dig */}
        <div className="layout-right">
        <img src={profileImage} alt="Molly Arnaryd" className="profile-image" />

        </div>
      </section>

      <div className="wave-container">
        <div className="wave light-1"></div>
      </div>
    </>
  );
};

export default Home;
