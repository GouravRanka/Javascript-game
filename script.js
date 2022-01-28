
const startgame = () => {

    const maindv = document.getElementById('maindiv');
    maindv.style.display = "block"
    const startgame = document.getElementById('startgamediv');
    startgame.style.display = "none"
}


const player2shoot = () => {
    console.log("palyer2 ahotted")

    const value1 = document.getElementById('player1health');
    const endgame = document.getElementById("maindiv");
    const value2 = document.getElementById('player2health');
    if (value1.innerHTML == 5) {
        endgame.style.display = "none"
        const startgame = document.getElementById('startgamediv');
        const value = document.getElementById('player2health');

        value1.innerHTML = 100;
        value2.innerHTML = 100;
        const player2won = document.getElementById('player2win');
        const player1won = document.getElementById("player1win");
        const player2data = +player2won.innerHTML + +1;
        player2won.innerHTML = player2data;
        
        startgame.style.display = "block";
        const numberofgame = document.getElementById("numberofgame");
        numberoggameupdated = +numberofgame.innerHTML + + 1;
        numberofgame.innerHTML = numberoggameupdated;
        if (player2won.innerHTML == 3) {
            const winnigdiv = document.getElementById("winningdiv");
            const startbutton = document.getElementById("startbutton")
            
            winnigdiv.style.display = "block";
            startbutton.style.display="none"
            if (player1won.innerHTML > player2won.innerHTML) {
                winnigdiv.innerHTML = "player 1 won"
            }
            else {
                winnigdiv.innerHTML = "player 2 won"
            }

        }
        return;
    }
    else {
        const newvalue = value1.innerHTML - 5;
        value1.innerHTML = newvalue;
        return;
    }

}
const player1shoot = () => {
    console.log("palyer1 ahotted")
    const value1 = document.getElementById('player1health');
    const value2 = document.getElementById('player2health');
    if (value2.innerHTML == 5) {
        const startgame = document.getElementById('startgamediv');
        const endgame = document.getElementById("maindiv");
        const value = document.getElementById('player2health');
        const numberofgame = document.getElementById("numberofgame");
        numberoggameupdated = +numberofgame.innerHTML + + 1;
        numberofgame.innerHTML = numberoggameupdated;
        value1.innerHTML = 100;
        value2.innerHTML = 100;
     

        const player2won = document.getElementById('player2win');
        const player1won = document.getElementById("player1win");

        const player1data = +player1won.innerHTML + +1;
        player1won.innerHTML = player1data;

        startgame.style.display = "block"
        endgame.style.display = "none"
        if (player1won.innerHTML == 3) {
            const winnigdiv = document.getElementById("winningdiv");
            
            winnigdiv.style.display = "block";
            const startbutton = document.getElementById("startbutton")
            startbutton.style.display="none";
            if (player1won.innerHTML > player2won.innerHTML) {
                winnigdiv.innerHTML = "player 1 won!!"
            }
            else {
                winnigdiv.innerHTML = "player 2 won !!"
            }
        }

            return;
        }
        else {
            const newvalue = value2.innerHTML - 5;
            value2.innerHTML = newvalue;
            return;
        }
    }