let hour = Number(prompt("Mời bạn nhập giờ:"));
let minute = Number(prompt("Mời bạn nhập phút:"));
let second = Number(prompt("Mời bạn nhập giây:"));

if(hour >= 0 && hour <= 12){
    document.writeln(`${hour}:${minute}:${second}`.concat(" AM"));
} else if(hour > 12 && hour <= 23){
    let temp = hour - 12;
    document.writeln(`${temp}:${minute}:${second}`.concat(" PM"));
} else{
    document.writeln("Giờ vượt qúa giới hạn!!!");
}