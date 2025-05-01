document.querySelector('.out').addEventListener('click', () => {
    let temp = document.getElementById('value').value;
    temp = temp.split("");
    document.querySelector(".numb").textContent = temp.length;
})