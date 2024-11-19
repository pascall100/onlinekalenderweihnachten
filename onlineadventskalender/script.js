// Texte für die einzelnen Türen
const doorTexts = [
    "Heute gehen wir Pizza essen mit Salat !",
    "Mach einen Spaziergang im Schnee!",
    "Es gibt heiße Schokolade für alle!",
    "Heute ist Basteltag: Wir machen Weihnachtsschmuck.",
    "Schaue deinen Lieblingsweihnachtsfilm an!",
    "Zeit für einen Spieleabend!",
    "Wir backen zusammen Plätzchen!",
    "Eine kleine Überraschung wartet auf dich.",
    "Lies ein schönes Weihnachtsbuch.",
    "Heute machen wir ein Weihnachtsfoto!",
    "Es gibt eine besondere Überraschung",
    "Es ist Zeit, einen Brief an den Weihnachtsmann zu schreiben!",
    "Füge eine Kugel an deinen Weihnachtsbaum hinzu.",
    "Trinke einen leckeren Wintertee!",
    "Heute gibt es einen Weihnachtsmarktbesuch.",
    "Du bekommst heute eine kleine Überraschungstüte!",
    "Singe ein Weihnachtslied mit der Familie.",
    "Heute basteln wir eine Girlande.",
    "Öffne dein Lieblingsplätzchenrezept!",
    "Es gibt eine Runde Waffeln für alle.",
    "Zünde eine Adventskerze an und entspanne.",
    "Wir spielen ein lustiges Weihnachtsquiz.",
    "Heute gibt es eine Weihnachtsparty!",
    "Frohe Weihnachten! Genieße den Tag!"
];

// Adventskalender generieren
const calendarGrid = document.querySelector(".calendar-grid");

doorTexts.forEach((text, index) => {
    const door = document.createElement("div");
    door.className = "door";
    door.textContent = index + 1; // Türnummer
    door.addEventListener("click", () => openModal(text));
    calendarGrid.appendChild(door);
});

// Modal-Steuerung
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeButton = document.getElementById("close-button");

function openModal(text) {
    modalText.textContent = text;
    modal.style.display = "flex";
}

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
