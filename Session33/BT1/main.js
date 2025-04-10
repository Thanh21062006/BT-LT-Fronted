let count = 1;
let pass = document.getElementById('value');
console.log(pass);
document.querySelector('.fa-eye').addEventListener('click', function(){
    count++;
    if(count % 2 == 0){
        pass.type = 'password'
    } else{
        pass.type = 'text'
    }
})

