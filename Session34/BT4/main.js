let arr = [];
localStorage.setItem('listJob', JSON.stringify(arr));

document.getElementById('add-todo').addEventListener('click', ()=>{
  let job = document.querySelector('.value').value;
  arr.push(job);
  localStorage.setItem('listJob', JSON.stringify(arr))
  showlist(arr);
  document.querySelector('.value').value = '';
})

function showlist(array){
  let div = document.querySelector('.content');
  let html = '';

  array.forEach((value,index) => {
    html += `
    <div class="information">
        <span>${value}</span>
        <button class="delt" onclick="del(${index})">Xóa</button>
      </div>
      <hr>
    </div>`
  });
  div.innerHTML = html;
}

function del(index){
  arr.splice(index, 1);
  localStorage.setItem('listJob', JSON.stringify(arr));
  showlist(arr);
}