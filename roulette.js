const score = {
    wins: 0,
    losses: 0,
    balance: 10000,
}

let computerMove = '';

updateScoreEl()


function updateScoreEl() {
   document.querySelector('.js-score')
        .innerHTML = 'Wins: ' + score.wins + ', Losses: ' + score.losses + ', Balance: $' + score.balance 
}

function playGameOddEven(playerMove) {
    pickOddEven();
    let result = '';
    if (playerMove === 'Even') {
        computerMove === 'Even' ? result = 'You Win!' : result = 'You Lose.';
    } 
    if (playerMove === 'Odd') {
        computerMove === 'Odd' ? result = 'You Win!' : result = 'You Lose.';
    } 

    if (result === 'You Win!') {
        score.wins += 1;
        score.balance += 200;
    } else {
        score.losses += 1;
        score.balance -= 100;
    }

    updateScoreEl()

    document.querySelector('.js-result')
        .innerHTML = result

    document.querySelector('.js-move')
        .innerHTML = 'You picked ' + playerMove + ', Computer landed on a number in the ' + computerMove + '. '

}
function pickOddEven() {
    let randomNumber = Math.random();

    if (randomNumber > 1/36 && randomNumber <= 2/36) {
        computerMove = ('Even');
    } else if (randomNumber > 3/36 && randomNumber <= 4/36) {
        computerMove = ('Even');
    } else if (randomNumber > 5/36 && randomNumber <= 6/36) {
        computerMove = ('Even');
    } else if (randomNumber > 7/36 && randomNumber <= 8/36) {
        computerMove = ('Even');
    } else if (randomNumber > 9/36 && randomNumber <= 10/36) {
        computerMove = ('Even');
    } else if (randomNumber > 11/36 && randomNumber <= 12/36) {
        computerMove = ('Even');
    } else if (randomNumber > 13/36 && randomNumber <= 14/36) {
        computerMove = ('Even');
    } else if (randomNumber > 15/36 && randomNumber <= 16/36) {
        computerMove = ('Even');
    } else if (randomNumber > 17/36 && randomNumber <= 18/36) {
        computerMove = ('Even');
    } else if (randomNumber > 19/36 && randomNumber <= 20/36) {
        computerMove = ('Even');
    } else if (randomNumber > 21/36 && randomNumber <= 22/36) {
        computerMove = ('Even');
    } else if (randomNumber > 23/36 && randomNumber <= 24/36) {
        computerMove = ('Even');
    } else if (randomNumber > 25/36 && randomNumber <= 26/36) {
        computerMove = ('Even');
    } else if (randomNumber > 27/36 && randomNumber <= 28/36) {
        computerMove = ('Even');
    } else if (randomNumber > 29/36 && randomNumber <= 30/36) {
        computerMove = ('Even');
    } else if (randomNumber > 31/36 && randomNumber <= 32/36) {
        computerMove = ('Even');
    } else if (randomNumber > 33/36 && randomNumber <= 34/36) {
        computerMove = ('Even');
    } else if (randomNumber > 35/36 && randomNumber <= 36/36) {
        computerMove = ('Even');
    } else {
        computerMove = ('Odd')
    }
}

function playGameRedBlack(playerMove) {
    pickRedBlack();
    let result = '';
    if (playerMove === 'Red') {
        computerMove === 'Red' ? result = 'You Win!' : result = 'You Lose.';
    } 
    if (playerMove === 'Black') {
        computerMove === 'Black' ? result = 'You Win!' : result = 'You Lose.';
    } 

    if (result === 'You Win!') {
        score.wins += 1;
        score.balance += 200;
    } else {
        score.losses += 1;
        score.balance -= 100;
    }

    updateScoreEl()

    document.querySelector('.js-result')
        .innerHTML = result

    document.querySelector('.js-move')
        .innerHTML = 'You picked ' + playerMove + ', Computer landed on a number in the ' + computerMove + '. '
}
function pickRedBlack() {
    let randomNumber = Math.random();

    if (randomNumber <= 1/36) {
        computerMove = ('Red');
    } else if (randomNumber > 2/36 && randomNumber <= 3/36) {
        computerMove = ('Red');
    } else if (randomNumber > 4/36 && randomNumber <= 5/36) {
        computerMove = ('Red');
    } else if (randomNumber > 6/36 && randomNumber <= 7/36) {
        computerMove = ('Red');
    } else if (randomNumber > 8/36 && randomNumber <= 9/36) {
        computerMove = ('Red');
    } else if (randomNumber > 11/36 && randomNumber <= 12/36) {
        computerMove = ('Red');
    } else if (randomNumber > 13/36 && randomNumber <= 14/36) {
        computerMove = ('Red');
    } else if (randomNumber > 15/36 && randomNumber <= 16/36) {
        computerMove = ('Red');
    } else if (randomNumber > 17/36 && randomNumber <= 18/36) {
        computerMove = ('Red');
    } else if (randomNumber > 18/36 && randomNumber <= 19/36) {
        computerMove = ('Red');
    } else if (randomNumber > 20/36 && randomNumber <= 21/36) {
        computerMove = ('Red');
    } else if (randomNumber > 22/36 && randomNumber <= 23/36) {
        computerMove = ('Red');
    } else if (randomNumber > 24/36 && randomNumber <= 25/36) {
        computerMove = ('Red');
    } else if (randomNumber > 26/36 && randomNumber <= 27/36) {
        computerMove = ('Red');
    } else if (randomNumber > 29/36 && randomNumber <= 30/36) {
        computerMove = ('Red');
    } else if (randomNumber > 31/36 && randomNumber <= 32/36) {
        computerMove = ('Red');
    } else if (randomNumber > 33/36 && randomNumber <= 34/36) {
        computerMove = ('Red');
    } else if (randomNumber > 35/36 && randomNumber <= 36/36) {
        computerMove = ('Red');
    } else {
        computerMove = ('Black')
    }
}

function playGameNumber(playerMove) {
    pickNumber();
    let result = '';
    if (playerMove === '1') {
        computerMove === '1' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '2') {
        computerMove === '2' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '3') {
        computerMove === '3' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '4') {
        computerMove === '4' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '5') {
        computerMove === '5' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '6') {
        computerMove === '6' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '7') {
        computerMove === '7' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '8') {
        computerMove === '8' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '9') {
        computerMove === '9' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '10') {
        computerMove === '10' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '11') {
        computerMove === '11' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '12') {
        computerMove === '12' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '13') {
        computerMove === '13' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '14') {
        computerMove === '14' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '15') {
        computerMove === '15' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '16') {
        computerMove === '16' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '17') {
        computerMove === '17' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '18') {
        computerMove === '18' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '19') {
        computerMove === '19' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '20') {
        computerMove === '20' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '21') {
        computerMove === '21' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '22') {
        computerMove === '22' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '23') {
        computerMove === '23' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '24') {
        computerMove === '24' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '25') {
        computerMove === '25' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '26') {
        computerMove === '26' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '27') {
        computerMove === '27' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '28') {
        computerMove === '28' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '29') {
        computerMove === '29' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '30') {
        computerMove === '30' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '31') {
        computerMove === '31' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '32') {
        computerMove === '32' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '33') {
        computerMove === '33' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '34') {
        computerMove === '34' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '35') {
        computerMove === '35' ? result = 'You Win!' : result = 'You Lose.';   
    }
    if (playerMove === '36') {
        computerMove === '36' ? result = 'You Win!' : result = 'You Lose.';   
    }

    if (result === 'You Win!') {
        score.wins += 1;
        score.balance += 3600;
    } else {
        score.losses += 1;
        score.balance -= 100;
    }

    updateScoreEl()

    document.querySelector('.js-result')
        .innerHTML = result

    document.querySelector('.js-move')
        .innerHTML = 'You picked ' + playerMove + ', Computer landed on a number in the ' + computerMove + '. '
} 
function pickNumber() {
    let randomNumber = Math.random();

    if (randomNumber <= 1/36) {
        computerMove = ('1');
    } else if (randomNumber > 1/36 && randomNumber <= 2/36) {
        computerMove = ('2');
    } else if (randomNumber > 2/36 && randomNumber <= 3/36) {
        computerMove = ('3');
    } else if (randomNumber > 3/36 && randomNumber <= 4/36) {
        computerMove = ('4');
    } else if (randomNumber > 4/36 && randomNumber <= 5/36) {
        computerMove = ('5');
    } else if (randomNumber > 5/36 && randomNumber <= 6/36) {
        computerMove = ('6');
    } else if (randomNumber > 6/36 && randomNumber <= 7/36) {
        computerMove = ('7');
    } else if (randomNumber > 7/36 && randomNumber <= 8/36) {
        computerMove = ('8');
    } else if (randomNumber > 8/36 && randomNumber <= 9/36) {
        computerMove = ('9');
    } else if (randomNumber > 9/36 && randomNumber <= 10/36) {
        computerMove = ('10');
    } else if (randomNumber > 10/36 && randomNumber <= 11/36) {
        computerMove = ('11');
    } else if (randomNumber > 11/36 && randomNumber <= 12/36) {
        computerMove = ('12');
    } else if (randomNumber > 12/36 && randomNumber <= 13/36) {
        computerMove = ('13');
    } else if (randomNumber > 13/36 && randomNumber <= 14/36) {
        computerMove = ('14');
    } else if (randomNumber > 14/36 && randomNumber <= 15/36) {
        computerMove = ('15');
    } else if (randomNumber > 15/36 && randomNumber <= 16/36) {
        computerMove = ('16');
    } else if (randomNumber > 16/36 && randomNumber <= 17/36) {
        computerMove = ('17');
    } else if (randomNumber > 17/36 && randomNumber <= 18/36) {
        computerMove = ('18');
    } else if (randomNumber > 18/36 && randomNumber <= 19/36) {
        computerMove = ('19');
    } else if (randomNumber > 19/36 && randomNumber <= 20/36) {
        computerMove = ('20');
    } else if (randomNumber > 20/36 && randomNumber <= 21/36) {
        computerMove = ('21');
    } else if (randomNumber > 21/36 && randomNumber <= 22/36) {
        computerMove = ('22');
    } else if (randomNumber > 22/36 && randomNumber <= 23/36) {
        computerMove = ('23');
    } else if (randomNumber > 23/36 && randomNumber <= 24/36) {
        computerMove = ('24');
    } else if (randomNumber > 24/36 && randomNumber <= 25/36) {
        computerMove = ('25');
    } else if (randomNumber > 25/36 && randomNumber <= 26/36) {
        computerMove = ('26');
    } else if (randomNumber > 26/36 && randomNumber <= 27/36) {
        computerMove = ('27');
    } else if (randomNumber > 27/36 && randomNumber <= 28/36) {
        computerMove = ('28');
    } else if (randomNumber > 28/36 && randomNumber <= 29/36) {
        computerMove = ('29');
    } else if (randomNumber > 29/36 && randomNumber <= 30/36) {
        computerMove = ('30');
    } else if (randomNumber > 30/36 && randomNumber <= 31/36) {
        computerMove = ('31');
    } else if (randomNumber > 31/36 && randomNumber <= 32/36) {
        computerMove = ('32');
    } else if (randomNumber > 32/36 && randomNumber <= 33/36) {
        computerMove = ('33');
    } else if (randomNumber > 33/36 && randomNumber <= 34/36) {
        computerMove = ('34');
    } else if (randomNumber > 34/36 && randomNumber <= 35/36) {
        computerMove = ('35');
    } else if (randomNumber > 35/36 && randomNumber <= 36/36) {
        computerMove = ('36');
    }
}

function playGame12(playerMove) {
    pick12();
    let result = '';
    if (playerMove === 'First 12') {
        computerMove === 'First 12' ? result = 'You Win!' : result = 'You Lose.';
    } 
    if (playerMove === 'Second 12') {
        computerMove === 'Second 12' ? result = 'You Win!' : result = 'You Lose.';
    } 
    if (playerMove === 'Third 12') {
        computerMove === 'Third 12' ? result = 'You Win!' : result = 'You Lose.';
    } 

    if (result === 'You Win!') {
        score.wins += 1;
        score.balance += 300;
    } else {
        score.losses += 1;
        score.balance -= 100;
    }

    updateScoreEl()

    document.querySelector('.js-result')
        .innerHTML = result

    document.querySelector('.js-move')
        .innerHTML = 'You picked ' + playerMove + ', Computer landed on a number in the ' + computerMove + '. '
}
function pick12() {
    let randomNumber = Math.random();

    if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = ('Second 12');
    } else if (randomNumber < 1/3) {
        computerMove = ('First 12');
    } else if (randomNumber >= 2/3) {
        computerMove = ('Third 12');
    }
}

function playGame18(playerMove) {
    pick18();
    let result = '';
    if (playerMove === 'First 18') {
        computerMove === 'First 18' ? result = 'You Win!' : result = 'You Lose.'; 
    } 
    if (playerMove === 'Second 18') {
        computerMove === 'Second 18' ? result = 'You Win!' : result = 'You Lose.'; 
    } 

    if (result === 'You Win!') {
        score.wins += 1;
        score.balance += 200;
    } else {
        score.losses += 1;
        score.balance -= 100;
    }
    
    updateScoreEl()

    document.querySelector('.js-result')
        .innerHTML = result

    document.querySelector('.js-move')
        .innerHTML = 'You picked ' + playerMove + ', Computer landed on a number in the ' + computerMove + '. '
}
function pick18() {
    let randomNumber = Math.random();

    if (randomNumber <= 1/2 ) {
        computerMove = ('First 18');
    } else {
        computerMove = ('Second 18');
    } 
    let result = '';
}