
    var num=Math.floor(Math.random()*6)+1;

    var imageRand="images/dice"+num+".png";

    document.querySelectorAll("img")[0].setAttribute("src",imageRand);

    var num1=Math.floor(Math.random()*6)+1;
    var imageRand1="images/dice"+num1+".png";
    document.querySelectorAll("img")[1].setAttribute("src",imageRand1);

    if(imageRand>imageRand1){
        document.querySelector("h1").innerText="Player1 is Winner";
    }else{
        document.querySelector("h1").innerText="Player2 is Winner";
    }