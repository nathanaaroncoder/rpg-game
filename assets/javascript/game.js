
$(document).ready(function() {

var harryPoints = 120;
var ronPoints = 100;
var hermionePoints = 150;
var dumblePoints = 180;
var spellPower = 0;

function printPoints(){
	$("#harry").html(harryPoints);
	$("#ron").html(ronPoints);
	$("#hermione").html(hermionePoints);
	$("#dumbledore").html(dumblePoints);

}

printPoints();




$("#harry-button").click( function(){
	$("#ron-button").detach().appendTo("#duel-choice");
	$("#dumble-button").detach().appendTo("#duel-choice");
	$("#hermione-button").detach().appendTo("#duel-choice");

	$("#ron-button").click(function(){
		$("#ron-button").detach().appendTo("#duel-arena");
		console.log(ronPoints);

		$("#spell").click(function(){
			harryPoints = harryPoints - 5;
			spellPower = spellPower + 8;
			ronPoints = ronPoints - spellPower;
			printPoints();
			$("#message-box").html(
				"Your spell damaged Ron for " + spellPower + " points. His spell damaged you for 5 points.")

			if(ronPoints <= 0){
			$("#ron-button").detach();
			$("#message-box").html("You beat Ron!");
			}

		})
	})

	$("#hermione-button").click(function(){
		$("#ron-button").detach().appendTo("#duel-arena");

		
	})




})








})