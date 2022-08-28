
let count = 0;

const output = document.querySelector('#output');

const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('subtract')) {
            count--;
        }
        else if(styles.contains('add')) {
            count++;
        }
        else count = 0;
        output.textContent = count;
    })
})