function Lottory(){
    var player01 = 1 + Math.floor(Math.random()*6);
    var player02 = 1 + Math.floor(Math.random()*6);

    var address01=returnAddresss(player01);
    var address02=returnAddresss(player02);


    var H1 = document.querySelector("h1");
    var Dice1 = document.querySelector("#dice1");
    var Dice2 = document.querySelector("#dice2");

    if(player01>player02){
        H1.innerHTML="Player 01 wins";
        Dice1.src=address01;
        Dice2.src=address02;
    }
    else if(player01<player02){
        H1.innerHTML="Player 02 wins";
        Dice1.src=address01;
        Dice2.src=address02;
    }
    else{
        H1.innerHTML="Draw";
        Dice1.src=address01;
        Dice2.src=address02;
    }
}




function returnAddresss(randomNumner){
    switch(randomNumner){
        case 1: return "images\\dice1.png";break;
        case 2: return "images\\dice2.png";break;
        case 3: return "images\\dice3.png";break;
        case 4: return "images\\dice4.png";break;
        case 5: return "images\\dice5.png";break;
        case 6: return "images\\dice6.png";break;
    }
}