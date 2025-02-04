
document.addEventListener('DOMContentLoaded', function() {
    var result = document.getElementById('result');
    
    var area = document.getElementById('area');
    
    
    area.addEventListener('mouseleave', function() {
        result.innerHTML = "Tu as quitté la zone.";
        alert("Tu as quitté la zone.")
    });
    });