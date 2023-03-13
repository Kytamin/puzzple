function part1(char){
    if(char==="G"){
        part="part1"
    }else if(char==="H"){
        part="part2"
    }else if(char==="J"){
        part="part3"
    }else if(char==="K"){
        part="part4"
    }else if(char==="Z"){
        part="part5"
    }
    x=document.getElementById(part).getAttribute("src")
    y=+x.charAt(7);
    y+=1
    if(y>3){
        y=1;
    }
    x=`part1/${char}`+y+".jpg"
    document.getElementById(part).src=x;
    let row1=document.getElementById("part1").getAttribute("src").charAt(7)
    let row2=document.getElementById("part2").getAttribute("src").charAt(7)
    let row3=document.getElementById("part3").getAttribute("src").charAt(7)
    let row4=document.getElementById("part4").getAttribute("src").charAt(7)
    let row5=document.getElementById("part5").getAttribute("src").charAt(7)
    if(row1===row2 && row1===row3 && row1===row4 && row1===row5){
       document.getElementById("result").innerHTML=`You win`
    }else {
        document.getElementById("result").innerHTML=""
    }

}