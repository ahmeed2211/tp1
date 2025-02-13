
let attempts=0;
function playagain(){
    document.getElementById('attempts').textContent=0;
    attempts=0;
}
document.getElementById('attempts').textContent=attempts;
function guessgame(x){
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
    else{
    if(x=="facile"){
        console.log("facile");
        let guess=prompt("please enter your guess");
        if(guess==Math.floor(Math.random()*10))
            {console.log("you have guessed right congrats ");
                document.getElementById('attempts').textContent=0;
                attempts=0;
            }
        else{
            console.log("please try again :< ");
            attempts++;
            document.getElementById('attempts').textContent=attempts;
        }
    }
    if(x=="int"){
        console.log("intermediare");
        let guess=prompt("please enter your guess");
        if(guess==Math.floor(Math.random()*100))
            {console.log("you have guessed right congrats ");
                document.getElementById('attempts').textContent=0;
                attempts=0;
            }
        else{
            console.log("please try again :< ");
            attempts++;
            document.getElementById('attempts').textContent=attempts;
        }
    }
    if(x=="diff"){
        console.log("difficile ");
        let guess=prompt("please enter your guess");
        if(guess==Math.floor(Math.random()*10))
            {console.log("you have guessed right congrats ");
                document.getElementById('attempts').textContent=0;
                attempts=0;
            }
        else{
            console.log("please try again :< ");
            attempts++;
            document.getElementById('attempts').textContent=attempts;
        }}
        document.getElementById('attempts').textContent=attempts;  

}}
