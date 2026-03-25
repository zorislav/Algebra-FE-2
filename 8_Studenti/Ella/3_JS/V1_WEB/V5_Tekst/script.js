var text = " Lorem ipsum dolor sit amet";

// 1. Spremite duljinu stringa u varijablu

var duljinuStringa = text.length;
console.log(duljinuStringa);

// 2. Izdvojite riječ 'sit' u zasebnu varijablu.
//var rijec = text.substr(19, 3);
var rijec = text.substring(19, 22);
console.log(rijec);

// 3. Zamijenite riječ 'amet' sa riječ 'elit'
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
console.log(bezprazninaText);

// 7. Nađite slovo na poziciji 12
var slovo = text.charAt(12);
console.log(slovo);
