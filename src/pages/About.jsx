import React from "react";
import Carousel from "../components/Carousel"; 

const About = () => {
  return (
    <>
      <div className="wave-container">
        <div className="wave light-3"></div>
      </div>

      {/* Wrapper för att ha två kolumner */}
      <section className="layout-container">
        {/* Vänster kolumn */}
        <div className="layout-left">
          <section className="layout-section">
      <h1>Kul att du vill veta mer om mig!</h1>
      <p>Jag är en <strong>kreativ och positiv</strong> person som <strong>alltid strävar efter utveckling. </strong>
        Jag är lugn i mitt sätt, men samtidigt <strong>driven av utmaningar</strong>, jag älskar att lära mig nya saker och ser <strong>personlig utveckling som en livslång resa. </strong>  
        För mig finns det inget slutmål där man är "klar", utan alltid en ny nivå att upptäcka.</p>

       <p> Jag har alltid dragits till både <strong>teknik och kreativitet</strong>, och det är just kombinationen av dessa två som fick mig att välja webbutveckling som min väg framåt. 
        Under mitt tidigare jobb insåg jag hur mycket jag gillar att arbeta med teknik, samtidigt som jag alltid haft ett <strong>stort intresse för att skapa – både visuellt och funktionellt. </strong> 
        Webbutveckling kändes som den perfekta blandningen där jag kan använda logik och problemlösning, men också design och estetik för att skapa användarvänliga och responsiva lösningar.<strong> Kreativitet är min frizon.</strong></p>
        
        <p>Min bakgrund inom <strong>Twitch och YouTube</strong> har spelat en stor roll i min resa. 
        Jag är stolt över att ha byggt upp min egen <strong>YouTube-kanal</strong>, som växte till nästan <strong>50 000 prenumeranter</strong> – helt utan stöd eller vägledning. 
        Den resan lärde mig <strong>självdisciplin, kreativ problemlösning och hur man engagerar en publik</strong>, färdigheter jag tar med mig in i allt jag gör. 
        Att arbeta med <strong>livestreaming</strong> har inte bara gett mig en djupare förståelse för <strong>interaktivitet och digitalt innehåll</strong>, utan också för hur man kan använda <strong>teknik för att förbättra upplevelser</strong>. 
        Jag har alltid gillat att <strong>experimentera med integrationer och automationer</strong>, och det var just detta intresse som inspirerade mig att vilja fördjupa mig ännu mer inom <strong>programmering och webbutveckling</strong>.</p>

        <p><strong>Min dröm?</strong>
          <br></br>
        Att hitta balansen mellan frihet och ansvar. 
        Jag ser mig själv arbeta flexibelt, kanske som frilansare där jag tar mig an projekt som utmanar och inspirerar mig, samtidigt som jag har en trygghet i ett deltidsjobb vid sidan av. 
        <strong> Att få styra min egen tid, men ändå ha struktur – det bästa av två världar.</strong></p>

        <p>Även har jag en <strong>stor dröm</strong> för mig vore att en dag ha ett <strong>eget garage eller en riktig studio</strong>, en plats där jag kan <strong>leka med färg utan några begränsningar</strong> – där jag inte behöver oroa mig för om det stänker ner golv, väggar eller möbler. 
        Att kunna experimentera fritt, hälla färg i stora format och helt och hållet försvinna in i skapandet utan att tänka på utrymme eller begränsningar skulle vara <strong>den ultimata friheten</strong>. Sen återstår det att se hur jag ska kombinera detta med teknik, <strong>to be continued...</strong></p>
      
       <p> Till sist lever jag efter mottot:
        <br></br>
        <strong>"Jag jagar inte, jag attraherar. Det som tillhör mig kommer att hitta mig."</strong>
        <br></br>
        För mig handlar det inte om att tvinga fram saker, utan om att växa, utvecklas och skapa rätt möjligheter – och lita på att rätt saker kommer när tiden är inne.</p>
        </section>
        </div>

     {/* Höger kolumn - Kreativt arbete */}
     <div className="layout-right">
    <p>Utöver mitt intresse för <strong>teknik och träning</strong> har jag alltid haft en stark <strong>kreativ sida</strong>. 
    Jag har en stor passion för måleri och uttrycker mig främst genom <strong>Acrylic Pour</strong>, en teknik där färger <strong>hälls och manipuleras</strong> på duken utan penslar. 
    Istället för att kontrollera varje penseldrag får färgen flöda fritt, blandas och skapa <strong>unika mönster</strong> genom att tiltas, blåses eller röras på olika sätt. 
    Det resulterar i <strong>abstrakta, livfulla färgexplosioner</strong>, där varje tavla blir en överraskning – ett slags <strong>kreativt kaos</strong> som alltid fascinerar mig.</p>

    <p>Min fascination för den här tekniken har även spridit sig till andra, och det har varit otroligt givande att kunna <strong>dela skapandeprocessen live på Twitch</strong>. 
    Att måla inför en publik och få interagera med tittare som följer varje färgflöde och ser tavlorna växa fram har varit en <strong>fantastisk upplevelse</strong>. 
    <strong> Kreativitet är något som växer när det delas</strong>, och att få inspirera andra genom min konst har bara förstärkt min passion ännu mer.</p>

    <p>Det var också genom den här resan som idén föddes att ta min konst vidare utanför duken. 
      Tillsammans med min <strong>streamingkanal</strong> har jag byggt upp en liten <strong>business</strong>, där jag säljer <strong>mobilskal med prints från mina tavlor</strong>. 
      Det känns <strong>magiskt</strong> att se mina abstrakta konstverk ta form på ett nytt sätt och bli något som människor kan bära med sig i sin vardag.</p>

    <p><strong>Här kan du hitta min shop:</strong> https://mollyjosefin-shop.fourthwall.com/</p>

    </div>
      </section>
      <Carousel />  {/* Lägg till bildspelet här */}

      <div className="wave-container">
        <div className="wave light-2"></div>
      </div>
      
    </>

    
  );
  
};

export default About;
