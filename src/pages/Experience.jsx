import React from "react";
import "../styles/_globals.scss";

const Experience = () => {
  return (
    <>
      <div className="wave-container">
        <div className="wave light-1"></div>
      </div>

      {/* Wrapper för att ha två kolumner */}
      <section className="layout-container">
        {/* Vänster kolumn */}
        <div className="layout-left">
          <section className="layout-section">
            <h2>Arbetslivserfarenhet</h2>
            <div className="layout-item">
              <h3>Onboarding Agent – Sello AB</h3>
              <p>Oktober 2022 – Augusti 2024 | Gävle, Sverige</p>
              <p>Ansvarade för onboarding av produkter och utbildning av kunder i plattformens gränssnitt.</p>
            </div>

            <div className="layout-item">
              <h3>Medarbetare – Blomsterlandet</h3>
              <p>April 2019 – Oktober 2022 | Gävle, Sverige</p>
              <p>Arbetade med kundbemötande, kassahantering och bukettbindning.</p>
            </div>

            <div className="layout-item">
              <h3>Driftledare – Max Burgers</h3>
              <p>Augusti 2016 – April 2019 | Gävle, Sverige</p>
              <p>Ledde team, schemaläggning, mathantering, och lagerhantering.</p>
            </div>
          </section>

          <section className="layout-section">
            <h2>Utbildning</h2>
            <div className="layout-item">
              <h3>Frontend Developer – KYH</h3>
              <p>2024 – Pågående | Anywhere, Sverige</p>
              <p>Utbildning inom HTML, CSS, JavaScript 1-3, TypeScript, UX-design och backend-utveckling.</p>
            </div>

            <div className="layout-item">
              <h3>Personlig Tränare – Högskolan i Gävle</h3>
              <p>2016 | Gävle, Sverige</p>
              <p>Studier inom anatomi, fysiologi, träningslära och kostrådgivning.</p>
            </div>

            <div className="layout-item">
              <h3>Samhällsvetenskapsprogrammet – Borgarskolan</h3>
              <p>2012 – 2015 | Gävle, Sverige</p>
              <p>Fokus på media, fotografering, information och kommunikation.</p>
            </div>
          </section>
        </div>

        {/* Höger kolumn - Summering */}
        <div className="layout-right">
          <h2>Vad jag har lärt mig</h2>
          <p>Genom mina olika roller har jag utvecklat starka färdigheter inom <strong>kundbemötande, ledarskap och problemlösning</strong>. </p>
          
          <p>På <strong>Sello AB</strong> har jag arbetat med <strong>onboarding</strong> och utbildning av kunder, där jag har stärkt min förmåga att <strong>kommunicera tydligt, arbeta strukturerat och hantera kundrelationer</strong>. </p>
          
          <p>Tidigare på <strong>Blomsterlandet</strong> utvecklade jag min <strong>servicekänsla, kreativitet och kassahantering</strong>, medan jag som <strong>driftledare på Max Burgers</strong> ansvarade för <strong>bemanning, daglig drift och teamledning</strong> i en snabb arbetsmiljö.</p>

          <p>Just nu studerar jag till <strong>Frontend Developer på KYH</strong>, där jag fördjupar mig i <strong>HTML, CSS, JavaScript, TypeScript, UX och backend</strong>. 
          Teknik och digitalt skapande har alltid intresserat mig, och den här utbildningen har gett mig en solid grund för att skapa <strong>strukturerade och användarvänliga lösningar</strong>.</p>

          <p>Min bakgrund inom hälsa kommer från mina studier i <strong>Anatomi och fysiologi med inriktning mot träning</strong> på <strong>Högskolan i Gävle</strong>, där jag även utbildade mig till <strong>personlig tränare</strong>. 
          Jag har kunskap inom <strong>träningslära, kost, idrottsmedicin och mental träning</strong>, vilket har stärkt min förståelse för <strong>prestation och välmående</strong>.</p>

          <p>Med en bred kompetens inom <strong>service, teknik och hälsa</strong> trivs jag bäst i roller där jag får kombinera <strong>struktur och kreativitet</strong>. 
          Jag är lösningsorienterad, engagerad och strävar alltid efter att leverera mitt bästa.</p>
        </div>
      </section>

      <div className="wave-container">
        <div className="wave light-2"></div>
      </div>
    </>
  );
};

export default Experience;
