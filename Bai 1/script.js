function setget() {
    const welcome = document.getElementById('welcome-text');
    const currenthour = new Date().getHours();
    let hello = "";

    if (currenthour >=5 && currenthour < 12) {
        hello = "Chào bạn, chúc bạn có một buổi sáng tốt lành!";
    }
    else if (currenthour >= 12 && currenthour <=18) {
        hello = "Chào bạn, chúc bạn có một buổi chiều nhiều năng lượng!";
    }
    else {
        hello = "Chào bạn, một buổi tối thật ấm áp nhé!";
    }

    welcome.innerText = hello;
}

setget(); 

const colorbtn = document.getElementById('change-color-btn');

function RandomColor() {
    const hexx = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexx[Math.floor(Math.random() * 16)];
    }
    return color;
}

colorbtn.addEventListener('click', function() {
    document.body.style.backgroundColor = RandomColor();
})