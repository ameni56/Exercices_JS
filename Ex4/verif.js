
 document.addEventListener('DOMContentLoaded', function() {
 var result = document.getElementById('result');


 var fruitSelect = document.getElementById('fruit');

 fruitSelect.addEventListener('change', function() {
     result.innerHTML = "Tu as choisi: " + fruitSelect.value;
 });
 });


