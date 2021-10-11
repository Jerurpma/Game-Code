function play() {
var die1 =Math.ceil(Math.random()*6); //shows that the first dice rolled is rolled at a random number between 1-6


var die2 =Math.ceil(Math.random()*6); ////shows that the second dice rolled is rolled at a random number between 1-6



var sum = die1+die2
document.write("Die 1 = " + die1) //showing that you add die 1 to the sum
document.write("<br/>") //breaks die 1 and die 2
document.write("Die 2 = " + die2) //showing that you add die 2 to the sum
document.write("<br/>") //breaks die 2 and sum
document.write("Sum = " + sum)
document.write("<br/>") //breaks the sum and the "CRAPS - you lose" result
if (sum == 7 || sum == 11) //shows that if the sum equals 7 or 11 then the person loses
{ document.write("CRAPS - you lose")
document.write("<br/>")
}
else if (die1== die2 && die1%2 == 0) //showing that is die 1 and die 2 are the same then you obtain doubles and are the winner and that if there isnt a doubles or 7 and or 11 then there is no winner or loser.
{
document.write("DOUBLES - you win") //Showing that when you roll doubles you win.
document.write("<br/>")
}

}

