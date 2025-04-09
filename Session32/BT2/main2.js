let count = 0;
document.getElementById('clickk').addEventListener('click', function(){
    count++;
    document.getElementsByClassName('count')[0].textContent = count;
})