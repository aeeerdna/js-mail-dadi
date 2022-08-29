console.log('JS OK!!!')

// random number from 1 to 6 for the player
const playerScore = Math.floor(Math.random() * 6) + 1;
console.log('Player win', playerScore);

// random number from 1 to 6 for the computer
const computerScore = Math.floor(Math.random() * 6) + 1;
console.log('Computer win', computerScore);


//exercise condition
if (playerScore > computerScore) {                // if player number > computer number --> player win
    //console.log('Player win');
    document.getElementById('container').innerHTML = 'Player win';
} else if (playerScore < computerScore) {        // if player number < computer number --> computer win
    //console.log('Computer win');
    document.getElementById('container').innerHTML = 'Computer win';
} else {
    //console.log('Draw');
    document.getElementById('container').innerHTML = 'Draw';
}