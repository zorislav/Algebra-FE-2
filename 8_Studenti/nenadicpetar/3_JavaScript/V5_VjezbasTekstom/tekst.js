var text = " Lorem ipsum dolor sit amet.";

text.charAt(12);

// 1. Ispis duljine
var length = text.length;
console.log(length);

// 2. Ispis riječi
var wordSit = text.substr(19, 3);
console.log(wordSit);

// 3. Zamjena teksta
var noviTekst = text.replace("amet", "elit");
console.log(noviTekst);

// 4. Konkatenacija nove varijable
var newText = text + ", consectetur adipiscing elit";
console.log(newText);

// 5. Konvertiranje u velika slova
var velikaSlova = text.toUpperCase();
console.log(velikaSlova);

// 6. Micanje početne praznine u stringu
var pocPraz = text.trim();
console.log(pocPraz);

// 7. Pronaći slovo na poziciji 12 (12 je preaznina, upisana pozicija 11)
//var poz12 = text.charAt(12);
var poz11 = text.charAt(11);
console.log(poz11);
