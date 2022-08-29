
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
        else count = 0

        if(count > 0) {
            output.style.color = "green";
        }
        if(count < 0) {
            output.style.color = "red";
        }
        if (count === 0) {
            output.style.color = "black";
        }
        
        output.textContent = count;
    })
})