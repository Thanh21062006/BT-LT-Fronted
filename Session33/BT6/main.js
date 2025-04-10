const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
}

document.querySelector(".btn-outline-secondary").addEventListener('click', () => {
    let html = "";
    let valu = document.querySelector(".form-control").value;
    let check = true;
    for (const key in weatherData) {
        if(key == valu.trim()){
            html += `
            <h2>${key}</h2>
                <div class="style">
                    <span class="icon">${weatherData[key].icon}</span>
                    <span class="icon">${weatherData[key].temperature}'C</span>
                    <div>
                        <span>${weatherData[key].description}<br>
                        Độ ẩm: ${weatherData[key].humidity}%<br>
                        Tốc độ gió: ${weatherData[key].windSpeed} km/h</span>
                    </div>
                </div>`
            check = false;
        }
    }

    if(check){
        alert(`Thời tiết tỉnh ${valu} chưa được cập nhật!`);
        return
    } else{
        document.querySelector(".content2").innerHTML = html;
    }
})