const display = document.getElementById('man-hinh');
const buttons = document.querySelectorAll('.nut');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const value = this.innerText;
        const currentdisplay = display.innerText;

        if(value === 'C') {
            display.innerText = '0';
        }
        else if (value === '=') {
            try {
                const res = eval(currentdisplay);
                display.innerText = res;
            } catch (error) {
                display.innerText = 'Lỗi';
            }
        }
        else {
            if (currentdisplay === '0' || currentdisplay === 'Lỗi') {
                display.innerText = value;
            }
            else {
                display.innerText += value;
            }
        }
    });
});

