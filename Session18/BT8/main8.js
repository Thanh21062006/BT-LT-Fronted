let a = parseFloat(prompt("Mời bạn nhập vào cạnh a:"));
let b = parseFloat(prompt("Mời bạn nhập vào cạnh b:"));
let c = parseFloat(prompt("Mời bạn nhập vào cạnh c:"));

if(a === b && a === c && b === c){
    document.writeln("Đây là tam giác đều.");
} else if(a === b || a === c || b === c){
    document.writeln("Đây là tam giác cân.");
} else if(c === (Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)))){
    document.writeln("Đây là tam giác vuông");
} else{
    document.writeln("Đây là tam giác thường");
}