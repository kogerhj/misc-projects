const output = document.querySelector('#output');

const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('subtract')) {
            output--;
        }
    })
})