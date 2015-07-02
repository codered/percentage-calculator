document.addEventListener('DOMContentLoaded', function () {
      document.getElementById("calculateButton").addEventListener('click', main);
});

function main() {
     console.log('calculating difference');
     var previous_value = document.getElementById('previous').value;
     var current_value = document.getElementById('current').value;
     var difference = Math.round(( (current_value - previous_value) / previous_value ) * 100, -2);
     document.getElementById("result").value = difference;
}
