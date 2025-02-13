
let attempts=0;
function playagain(){
    document.getElementById('attempts').textContent=0;
    attempts=0;
}
document.getElementById('attempts').textContent=attempts;
function guessgame(x){
    let c=Math.random();
    while(attempts < 3){
        let guess = prompt("please enter your guess");
        while(isNaN(guess)){
            guess = prompt("please enter a valid number");
        }
        guess = Number(guess);
        if(x == "facile"){
            if(guess == Math.floor(x* 10)){
                console.log("you have guessed right congrats ");
                document.getElementById('attempts').textContent = 0;
                return;
            }
        }
        if(x == "int"){
            if(guess == Math.floor(x* 100)){
                console.log("you have guessed right congrats ");
                document.getElementById('attempts').textContent = 0;
                return;
            }
        }
        if(x == "diff"){
            if(guess == Math.floor(x*1000)){
                console.log("you have guessed right congrats ");
                document.getElementById('attempts').textContent = 0;
                return;
            }
        }
        console.log("please try again :< ");
        attempts++;
        document.getElementById('attempts').textContent = attempts;
    }
    
    document.getElementById('attempts').textContent=attempts;  
        if(attempts>=3){
            console.log("you have lost the game :( !! please try again");
            let again=confirm("do you want to play again ?");
            {
                if(again==true){
                    playagain();
    
                }
                else{
                    console.log("thank you for playing");
                }
            }
        }
}
