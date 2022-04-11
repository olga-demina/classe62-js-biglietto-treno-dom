// //Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// // il prezzo del biglietto è definito in base ai km (0.21 € al km)
// // va applicato uno sconto del 20% per i minorenni
// // va applicato uno sconto del 40% per gli over 65.
// // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
//

// Prima Tutto il programma si eseguiva dal momento del caricamento della pagina

// Quando utente clicca il bottone genera
// Inizio il calcolo


const generateBtn = document.getElementById("bottone");

generateBtn.addEventListener("click", function () {
  // INPUT
  // Prelevare i dati inseriti dall'utente
  const userName = document.getElementById("nome").value;
  console.log(userName);

  const userKm = document.getElementById("km").value;
  console.log(userKm);

  const userAge = document.getElementById("fascia-eta").value;
  console.log(userAge);

  // ELABORAZIONE
  // Se i km oppure l'età non è valore numerico, non faccio calcolo
  if (isNaN(userKm)) {
    // eccezione, errore
    alert("I dati che hai inserito non sono corretti");
  } else {
    // Calcolare il prezzo base del biglietto
    let price = userKm * 0.21;
    let discount = 0;
    console.log(price);

    // Calcolare lo sconto
    // Se l'utente è minorenne -> applico lo sconto di 20%
    // altrimeti se è over 65 applico lo sconto del 40%

    let offerText = "Nessuna offerta";

    if (userAge === "minorenne") {
      discount = price * 0.2;
      offerText = "Offerta minorenne";
    } else if (userAge === "over65") {
      discount = price * 0.4;
      offerText = "Offerta over65";
    }

    price = price - discount;
    console.log(price);

    // Generazione codici
    const cabNumber = Math.floor(Math.random() * 9) + 1;
    console.log(cabNumber);

    const cpCode = Math.floor(Math.random() * (100000 - 90000)) + 90000;

    // OUTPUT
    // scrivere output
    // Scrivere nome
    const nameBox = document.getElementById("nome-passeggero");
    //    console.log(nameBox);
    nameBox.innerHTML = userName;

    // aggiungere offerta
    const offerCol = document.querySelector(
      ".offerta tbody tr :nth-child(1) span"
    );
    console.log(offerCol);
    offerCol.innerHTML = offerText;
    //      Con la creazione della variabile
    //     const offerPrice = document.getElementById("costo");
    //     console.log(offerPrice);
    //     offerPrice.innerHTML = `€ ${price.toFixed(2)}`

    // aggiungere il numero della carrozza
    document.getElementById("carrozza").innerHTML = cabNumber;

    // aggiungere il cp code
    document.getElementById("codice-cp").innerHTML = cpCode;

    // aggiungere prezzo
    // Senza creazione della variabile
    document.getElementById("costo").innerHTML = `€ ${price.toFixed(2)}`;

    // visualizzazione del biglietto
    const ticket = document.getElementById("biglietto");
    // ticket.classList.remove("hidden");
    // ticket.classList.add("show");
    ticket.className = "show";
  }

});


const deleteBtn = document.getElementById("annulla");
deleteBtn.addEventListener("click", function () {
    // Cancello i valori dal biglietto
    document.getElementById("nome-passeggero").innerHTML = "";

    // nascondo biglietto
    document.getElementById("biglietto").className = "hidden";

    // ripulisco i campi
    document.getElementById("nome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("fascia-eta").value = "";

});