var randomNo1 = Math.floor(Math.random() *3)+1;
var randomImg1 = "images/img" + randomNo1 +".jpg";
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImg1);

var randomNo2 = Math.floor(Math.random() *3)+1;
var randomImg2 = "images/img" + randomNo2 +".jpg";
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", randomImg2);

if(randomNo1 == 1 && randomNo2 == 2){
    document.querySelectorAll("h1")[1].innerHTML = "Player 1 Wins";
}
else if(randomNo1 == 2 && randomNo2 == 3){
    document.querySelectorAll("h1")[1].innerHTML = "Player 1 Wins";
}
else if(randomNo1 == 3 && randomNo2 == 1){
    document.querySelectorAll("h1")[1].innerHTML = "Player 1 Wins";
}
else if(randomNo1 ==  randomNo2 ){
    document.querySelectorAll("h1")[1].innerHTML = "Draw";
}
else{
    document.querySelectorAll("h1")[1].innerHTML = "Player 2 Wins";
}
