var text = " Lorem ipsum dolor sit amet";

// 1. zadatak
var duljinaStringa = text.length;
console.log(duljinaStringa);

// 2. zadatak
var rijecSit = text.substr(19, 3);
console.log(rijecSit);

var rijecSit = text.substring(19, 22);
console.log(rijecSit);

// 3. zadatak
var noviTekst = text.replace("amet", "elit");
console.log(noviTekst);

// 4. zadatak
var dodaniText = text + ", " + "consectetur adipiscing elit";
console.log(dodaniText);

// 5. zadatak
var velikiText = text.toUpperCase();
console.log(velikiText);

// 6. zadatak
var bezPraznine = text.trim;
console.log(bezPraznine);

// 7. zadatak
var slovo = text.charAt(12);
console.log(slovo);
