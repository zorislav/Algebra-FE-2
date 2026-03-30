var text = " Lorem ipsum dolor sit amet";

//1.Spremite duljinu stringa u varijablu.

var duljinaStringa = text.length;
console.log(duljinaStringa);

// 2.Izdvojite riječ "sit" u zasebnu varijablu.
var rijec = text.substr(19, 3);
var rijec = text.substring(19, 21);
console.log(rijec);

//3. Zamijenite riječ amet sa riječi elit

var noviTekst = text.replace("amet", "elit");
console.log(noviTekst);

//4.konkatenirajte u novu varijablu zadani string sa stringom consectetur adipscing elit

var dodaniTekst = text + ", consectetur adipscing elit";
console.log(dodaniTekst);

// 5.konvertirajte sve riječi u orginalnom stringu u velika slova
var velikiTekst = text.toUpperCase();
console.log(velikiTekst);

//6. Maknite početnu prazninu u stringu.

var bezPrazninaTekst = text.trim();
console.log(bezPrazninaTekst);

// 7. Nađite slovo na poziciji 12
var slovo = text.charAt(12);
console.log(12);
