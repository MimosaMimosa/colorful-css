(function () {
    let btnRipple = document.querySelectorAll('.btn-ripple');
    btnRipple.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let x_pos = e.clientX;
            let y_pos = e.clientY;

            let btn_y_pos = e.target.offsetTop;
            let btn_x_pos = e.target.offsetLeft;

            let x = x_pos - btn_x_pos;
            let y = y_pos - btn_y_pos;

            let span = document.createElement('span');
            span.classList.add('ripple');
            span.style.top = `${y}px`;
            span.style.left = `${x}px`;
            e.currentTarget.appendChild(span);

            setTimeout(() => {
                span.remove();
            }, 500);
        });
    });
})();
