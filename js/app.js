// Ask username

var  userName = prompt('Enter name, please.');

if (userName == "Matt") {
    alert('Howdy, Matt!');
    var greeting1 = alert('Have a look, ' +  userName + '!')
}

var  order = confirm ('Press OK if you need some food recommendations');
var greeting1 = alert('Have a look, ' +  userName + '!');





 
// Desicion made



function desicionmade() {
  alert('Glad we can help you on food today!');
}








// ask if they're hungry
var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18) {
    greeting = "It's Time for Dinner, " + userName + '!';
} else if (hourNow > 12) {
    greeting = "Have a Great Luchtime, " + userName + '!';
} else if (hourNow > 0) {
    greeting = "Breakfast is Ready, " + userName + '!';
} else {
    greeting = "Restaurants aren't open at this time, " + userName;
}

document.getElementById('greeting-placeholder').textContent = greeting;


// Salutations







//21+ special greeting






