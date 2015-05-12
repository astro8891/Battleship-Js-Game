var user = 1
var hits = 0
var shots = 0
var position1 = 3
var position2 = 4
var position3 = 5
var isSunk = false


while (isSunk == false) {
	guess = prompt("Ready, aim, fire! Select your shot from the numbers 1 - 6")

	if (guess <= 0 || guess > 6) {
		alert("Number is outside the scope of shots, please select from 1-6")
	}	
	if (guess == position1 || guess == position2 || guess == position3) {
		alert("Critical Hit!")
		hits = hits + 1
		shots = shots + 1
	}
	if (guess != position1 || guess != position2 || guess != position3)	{
		alert("Miss!, Try again!")
		shots = shots + 1
	}

	if (hits == 2){
		alert("Critical hit, shes sinking!")
	}
	if (hits == 3){
		alert("Sunk!!!!")
		isSunk == true
	}

	if (isSunk == true){
		alert("Well done on sinking the ship, your shot accuracy is" + shots/3)
	}	

}


