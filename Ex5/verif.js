
document.addEventListener('DOMContentLoaded', function() {
var form = document.getElementById('myForm');


var result = document.getElementById('result');


form.addEventListener('submit', function(event) {
   
    event.preventDefault();
    
   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    
    result.innerHTML = "Nom: " + name + "<br>Email: " + email;
});
});

