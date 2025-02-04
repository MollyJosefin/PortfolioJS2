import React, { useRef, useEffect, useState } from "react";

const Contact = () => {
  const nameInputRef = useRef(null);

  // Enkel state för att hantera formulärdata
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Sätt fokus på namn-inputen vid sidladdning
  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  // Hantera formulärinlämning
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Alla fält måste fyllas i!");
      return;
    }

    alert("Meddelande skickat!");
    
    // Rensa fälten
    setName("");
    setEmail("");
    setMessage("");
    setError("");
  };

  return (
    <div>
       <div className="wave-container">
        <div className="wave light-2"></div>
      </div>
      <h1>Kontakt</h1>
      <form onSubmit={handleSubmit}>
        <label>Namn:</label>
        <input
          ref={nameInputRef}
          type="text"
          placeholder="Ditt namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>E-post:</label>
        <input
          type="email"
          placeholder="Din e-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Meddelande:</label>
        <textarea
          placeholder="Skriv ditt meddelande här..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Skicka</button>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <div className="wave-container">
        <div className="wave light-1"></div>
      </div>
    </div>
    
  );
};

export default Contact;
