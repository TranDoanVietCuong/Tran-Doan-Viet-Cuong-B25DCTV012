function setget() {
    const welcome = document.getElementById('welcome-text');
    const currenthour = new Date().getHours();
    let hello = "";

    if (currenthour >=5 && currenthour < 12) {
        hello = "Chào bạn, chúc bạn có một buổi sáng tốt lành!";
    }
    else if (currenthour >= 12 && currenthour < 18) {
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

const linkHome = document.getElementById('link-home');
const linkAbout = document.getElementById('link-about');
const linkProjects = document.getElementById('link-contact');
const contentBox = document.getElementById('dynamic-content');

const contentHome = `
    <h3>🏠 Trang chủ</h3>
    <p>Chào mừng đến với không gian cá nhân của mình. Nơi mình chia sẻ những trải nghiệm cá nhân hàng ngày.</p>
`;

const contentAbout = `
    <h3>🤖 Giới thiệu bản thân</h3>
    <p>Mình là <strong>Trần Đoàn Việt Cường</strong>, hiện đang là sinh viên năm 2 chuyên ngành AIoT tại Học viện Công nghệ Bưu chính Viễn thông (PTIT).</p>
`;

const contentContact = `
    <h3>☎️ Liên hệ</h3>
    <ul>
        <li><strong>Email:</strong> CuongTDV.B25TV012@stu.ptit.edu.vn</li>
        <li><strong>Số Điện thoại:</strong> 0366338105</li>
`;

linkHome.addEventListener('click', function(event) {
    event.preventDefault(); 
    contentBox.innerHTML = contentHome;
});

linkAbout.addEventListener('click', function(event) {
    event.preventDefault();
    contentBox.innerHTML = contentAbout;
});

linkProjects.addEventListener('click', function(event) {
    event.preventDefault();
    contentBox.innerHTML = contentContact;
});
