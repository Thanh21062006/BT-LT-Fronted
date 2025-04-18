const products = [
    {
      id: 1,
      name: 'Laptop Dell XPS 15',
      price: 35990000,
      image: 'https://toplist.vn/images/800px/macbook-da-nang-655330.jpg',
      description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Max',
      price: 32990000,
      image: 'https://th.bing.com/th/id/OIP.PziVpdEcFefEpY0N6I0WEwHaHa?rs=1&pid=ImgDetMain',
      description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra',
      price: 28990000,
      image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain',
      description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
    },
    {
      id: 4,
      name: 'Tai nghe Sony WH-1000XM5',
      price: 7990000,
      image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhgrhu3q6h1d5f',
      description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
    },
    {
      id: 5,
      name: 'Apple Watch Series 9',
      price: 11990000,
      image: 'https://s.yimg.com/ny/api/res/1.2/1O6tqdSLClA895yNlFnr3Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD0xMjQy/https://media.zenfs.com/en/aol_nbc_universal_184/7f066b8d740d45acbfa5635e0c5db12d',
      description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
    },
    {
      id: 6,
      name: 'Loa JBL Charge 5',
      price: 3990000,
      image: 'https://antuan.vn/public/uploads/anh-san-pham/jbl/charge5/5.jpg',
      description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
    },
  ];


  function render(arr) {
    let html = "";
    let div = document.querySelector(".row-cols-6");
    console.log(div);
    products.forEach(arr =>{
        html += `
        <div class="col"><img src="${arr.image}" alt="">
        <h2>${arr.name}</h2>
        <p>${arr.description}</p>
        <p>${arr.price}</p>
        <button class="click">Buy</button>
      </div>`
    })
    div.innerHTML = html;
  }

  render(products);

  document.querySelector(".output").addEventListener('click', () => {
    let html2 = "";
    let valu = document.querySelector(".inp").value;
    let arrSearch = products.filter((value) => value.name.includes(valu));

    if(arrSearch.length == 0){
        alert("Sản phẩm không tồn tại!");
        return
    }

    let div = document.querySelector(".row-cols-6");
    arrSearch.forEach(arr =>{
        html2 += `
        <div class="col"><img src="${arr.image}" alt="">
        <h2>${arr.name}</h2>
        <p>${arr.description}</p>
        <p>${arr.price}</p>
        <button class="click">Buy</button>
      </div>`
    })
    div.innerHTML = html2;
})
  