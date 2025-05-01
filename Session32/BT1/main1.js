document.getElementById("style").addEventListener('click', function(){
    let color = "#";
    for(let i = 0; i < 6;i++){
        color += Math.floor(Math.random()*9);
    }

    document.getElementById('style1').style.backgroundColor = `${color}`;
})