function Button(){
    let num=document.getElementById("num").value;
    let farenhieght=  (num * 9/5) + 32;
    document.getElementById("Resutl").innerHTML= farenhieght;
    console.log(farenhieght);

}

// function Button() {
//     let num = document.getElementById("num").value;
//     let fahrenheit = (num * 9/5) + 32;
//     document.getElementById("Result").innerHTML = "The Calculation Result is " + fahrenheit;
// }
