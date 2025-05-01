let random = "123456789ABEF";

for(let i = 1; i <= 10; i++){
    let color = "#";
    for(let j = 1; j <= 6;j++){
        color += random.charAt(Math.random() * random.length);
    }
    console.log(`%cMàu sắc đã được thay đổi!`, `color: ${color}`);
}


