# PortfolioJS2

Detta är en personlig portfolio byggd med React, SCSS och Redux för temahantering. Webbplatsen visar mina erfarenheter, projekt och kontaktuppgifter. Syftet är att presentera mina färdigheter inom frontend-utveckling och webbutveckling på ett stilrent och responsivt sätt.

Funktionalitet:

- Responsiv design – Anpassad för både desktop och mobil.
- Dark/Light Mode – Implementerad med Redux för att spara användarens val.
- Projektsektion med dropdown – Klicka på ett projekt för att se en detaljerad beskrivning.
- Animerat bildspel – Visar mina skapelser på About-sidan.
- Kontaktformulär med useRef – Input-fältet får automatiskt fokus vid sidladdning.
- Navigationsmeny med hamburger-ikon – Anpassar sig för mobilanvändare.

Teknologier:

- React (Komponentbaserad utveckling)
- SCSS (För avancerad styling och variabler)
- Redux Toolkit (För global state management)
- useRef Hook (Används för att automatiskt sätta fokus i kontaktformuläret)
- React Hooks (useState, useEffect, useRef)

Användning av useRef:

I kontaktformuläret används useRef för att automatiskt sätta fokus på namn-fältet när sidan laddas. Detta förbättrar användarupplevelsen genom att låta användaren börja skriva direkt utan att behöva klicka i fältet.

Kodexempel:

import React, { useRef, useEffect } from 'react';

const Contact = () => {
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  return (
    <form>
      <input ref={nameInputRef} type="text" placeholder="Ditt namn" />
      <button type="submit">Skicka</button>
    </form>
  );
};
