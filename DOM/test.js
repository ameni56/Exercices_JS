
document.addEventListener('DOMContentLoaded',function(){
// Sélection de l'élément <ul> par son id
// let maListe = document.getElementById("maListe");

// // Afficher tous les nœuds enfants de <ul>

// console.log("ChildNodes de maListe:", maListe.childNodes);



// Afficher le premier et le dernier nœud enfant
console.log("First Child de maListe:", maListe.firstChild);



console.log("Last Child de maListe:", maListe.lastChild);

// Pour éviter les nœuds de type "texte" (espaces), vous pouvez utiliser firstElementChild et lastElementChild
console.log("Premier élément enfant:", maListe.firstElementChild);
console.log("Dernier élément enfant:", maListe.lastElementChild);

// Sélectionner le premier <li> (premier élément enfant de la liste)
let premierLi = maListe.firstElementChild;

// Afficher le nœud suivant 

console.log("Next Sibling de premierLi:", premierLi.nextSibling);


console.log("Next Element Sibling de premierLi:", premierLi.nextElementSibling);

// Afficher le nœud précédent du deuxième <li> par exemple
let deuxiemeLi = premierLi.nextElementSibling;
console.log("Previous Element Sibling de deuxiemeLi:", deuxiemeLi.previousElementSibling);

// Afficher le nœud parent du premier <li>
console.log("Parent Node de premierLi:", premierLi.parentNode);

// Afficher le nom du nœud, sa valeur et son type
console.log("nodeName de premierLi:", premierLi.nodeName);
console.log("nodeValue de premierLi:", premierLi.nodeValue); 

let texteNode = parag.firstChild; 
console.log("nodeName de texteNode:", texteNode.nodeName); 
console.log("nodeValue de texteNode:", texteNode.nodeValue); 



})