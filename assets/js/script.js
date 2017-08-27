var msg;
var wins;
var lose;
var tied;
const rps = ['r', 'p', 's'];
const members = ['random', 'player'];
var random;
var player;
var turn;
var a;
var b;
var compChoice;
var playerChoice;
var imgP;
var imgC;

function init() {

    msg = document.getElementById("message");
    wins = document.getElementById("wins");
    lose = document.getElementById("loses");
    tied = document.getElementById("tied");
    imgP = document.getElementById("pImg");
    imgC = document.getElementById("cImg");

} //ends init

document.onkeyup = function (event) {

    msg.style.color = "#000";
    random = (Math.ceil(Math.random() * 3) - 1);
    compChoice = rps[random];
    playerChoice = event.key;
    player = rps.indexOf(event.key);
    turn = [random, player];
    a = 0;
    b = 1;

    if (random === player) {
        tied.innerHTML = parseInt(tied.innerHTML) + 1;
        chngImg(random, player);
        msg.innerHTML = "TIED!!!";
        imgEffect(3);
    } else if (player === -1) {
        msg.innerHTML = "Wrong character: r p s only.";
        msg.style.color = "#ff0000"; //Red
    } else {
        chngImg(random, player);
        for (var i = 0; i < 2; i++) {
            if ((turn[a] === 0) && (turn[b] === 1))
                setVal(members[b]);
            if ((turn[a] === 0) && (turn[b] === 2))
                setVal(members[a]);
            if ((turn[a] === 1) && (turn[b] === 2))
                setVal(members[b]);

            a = 1;
            b = 0;
        } //ends for loop
    } //ends else
} //ends onkey

function setVal(daWinner) {

    if (daWinner === 'random') {
        lose.innerHTML = parseInt(lose.innerHTML) + 1;
        msg.innerHTML = "COMPUTER WINS";
        imgEffect(2);
    } else {
        wins.innerHTML = parseInt(wins.innerHTML) + 1;
        msg.innerHTML = "YOU WIN";
        imgEffect(1);
    }

} //ends setVal

function chngImg(rnd, plyr) {
    if (plyr === 0)
        imgP.src = 'assets/images/rock.png';
    else if (plyr === 1)
        imgP.src = 'assets/images/paper.png';
    else if (plyr === 2)
        imgP.src = 'assets/images/scissors.png';

    if (rnd === 0)
        imgC.src = 'assets/images/rock.png';
    else if (rnd === 1)
        imgC.src = 'assets/images/paper.png';
    else if (rnd === 2)
        imgC.src = 'assets/images/scissors.png';

} //ends chngImg

function imgEffect(valIn) {

    if (valIn === 1)
        imgP.style.border = "15px solid blue";
    if (valIn === 2)
        imgC.style.border = "15px solid red";
    if (valIn === 3) {
        imgP.style.border = "15px solid yellow";
        imgC.style.border = "15px solid yellow";
    }
    setTimeout(function () {
        imgP.style.border = "initial";
        imgC.style.border = "initial";
    }, 200);

} //ends imgEffect
function clrEffect(val) {

    imgP.style.border = "initial";


} //ends imgEffect

document.addEventListener("DOMContentLoaded", init, false);