

 document.addEventListener('DOMContentLoaded', function() {
 var result = document.getElementById('result');


 document.addEventListener('keydown', function(event) {
     result.innerHTML = "Tu as enfoncé la touche: " 
 });


 document.addEventListener('keyup', function(event) {
     result.innerHTML = "Tu as relâché la touche: " + event.key + " (keyup)";
 });
 });
