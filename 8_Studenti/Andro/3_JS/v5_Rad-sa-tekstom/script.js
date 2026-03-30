var text = " Lorem ipsum dolor sit amet";

var duljinaStringa = text.length;
console.log(duljinaStringa);

// var rijec = text.substr(19, 3);
var rijec = text.substring(19, 22);
console.log(rijec);

var noviTekst = text.replace("amet", "elit");
console.log(noviTekst);

var dodaniTekst = text + ", consectetur adipiscing elit";
console.log(dodaniTekst);

var velikiTekst = text.toUpperCase();
console.log(velikiTekst);

var bezPrazninaTekst = text.trim();
console.log(bezPrazninaTekst);

var slovo = text.charAt(12);
console.log(slovo);
