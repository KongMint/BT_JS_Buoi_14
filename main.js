// document.getElementById("btnSapXep").onclick = function(){
//     var a = document.getElementById("soNguyenMot").value * 1;
//     var b = document.getElementById("soNguyenHai").value * 1;
//     var c = document.getElementById("soNguyenBa").value * 1

//     let array = [a,b,c]

//     array.sort()
    

//     document.getElementById("sapXep").innerHTML =`${array[0]} < ${array[1]} < ${array[2]}` 
// }

//Bài tập 1:
document.getElementById("btnSapXep").onclick = function(){
    var a = document.getElementById("soNguyenMot").value * 1;
    var b = document.getElementById("soNguyenHai").value * 1;
    var c = document.getElementById("soNguyenBa").value * 1;

    let result = ''

    if(a > b && b > c){
        result = `${a} > ${b} > ${c}`
    }else if(a > b && c > b){
        result = `${b} < ${c} < ${a}`
    }else if(a > b && c > a){
        result = `${b} < ${a} < ${c}`
    }else if(b > a && b > c){
        result = `${c} < ${a} < ${b}`
    }else if(b > c &&  c > a){
        result = `${a} < ${c} < ${b}`
    }else{
        result = `${a} < ${b} < ${c}`
    }

    document.getElementById("sapXep").innerHTML = result;
}

//Bài tập 2:
document.getElementById("btnLoiChao").onclick = function(){
    var user = document.getElementById("nguoiSuDung").value;

    let result = `Xin chào ${user}!`

    document.getElementById("LoiChao").innerHTML = result;
}

//Bài tập 3:
document.getElementById("btnDem").onclick = function(){
    var number1 = document.getElementById("number1").value * 1;
    var number2 = document.getElementById("number2").value * 1;
    var number3 = document.getElementById("number3").value * 1;

    let odds = 0
    let even = 0

    if(number1 % 2 == 0){
        even++
    }else{
        odds++
    }
    
    if(number2 % 2 == 0){
        even++
    }else{
        odds++
    }
    
    if(number3 % 2 == 0){
        even++
    }else{
        odds++
    }

    const result = `Có ${even} số chẵn, ${odds} số lẻ`

    document.getElementById("dem").innerHTML = result;
}

//Bài tập 4:
document.getElementById("btnDuDoan").onclick = function(){
    var canh1 = document.getElementById("canh1").value * 1;
    var canh2 = document.getElementById("canh2").value * 1;
    var canh3 = document.getElementById("canh3").value * 1;

    let result = ''

    if(canh1 == canh2 && canh1 == canh3 && canh2 == canh3){
        result = `Đây là tam giác đều`
    }else if(canh1 == canh2 || canh1 == canh3 || canh2 == canh3){
        result = `Đây là tam giác cân`
    }else if(canh1*canh1 == canh2*canh2 + canh3*canh3 || canh2*canh2 == canh1*canh1 + canh3*canh3 || canh3*canh3 == canh2*canh2 + canh1*canh1){
        result = `Đây là tam giác vuông`
    }else{
        result = `Đây là một tam giác nào đó`
    }

    document.getElementById("duDoan").innerHTML = result;
}