var text = " Lorem ipsum dolor sit amet";

// 1. Spremite duljinu stringa u varijablu.

var duljinaStringa = text.length;
console.log(duljinaStringa);

// 2. Izdvojite riječ 'sit' u zasebnu varijablu.

var rijec = text.substring(19, 3);
console.log(rijec);

// 3. Zamijenite riječ amet sa elit

var noviText = text.replace("amet", "elit");
console.log(noviText);

// 4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
var dodaniText = text + ", consectetur adipiscing elit";
console.log(dodaniText);

// 5. Konvertirajte sve riječi u orginalnom stringu u velika slova
var velikiText = text.toUpperCase();
console.log(velikiText);

// 6. Maknite počenu prazninu u stringu
var bezPrazninaText = text.trim();
console.log(bezPrazninaText);

// 7. Nađite slovo na poziciji 12
var slovoPozicija = text.charAt(12);
console.log(slovoPozicija);
