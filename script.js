let tiers = document.getElementById('tiers');
let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let startBtn = document.querySelector('.startBtn');
let stopBtn = document.querySelector('.stopBtn');
let initializeBtn = document.querySelector('.initialize');

startBtn.addEventListener('click', () => {
    
    stopBtn.removeAttribute("disabled");
    stopBtn.style.color = "#000";
    initializeBtn.setAttribute("disabled", "disabled");
    initializeBtn.style.backgroundColor = "#eee";
    initializeBtn.style.color = "#aaa";

    (function loop() {
        const interval = setTimeout(() => {
            tiers.textContent++;


            if (tiers.textContent == 60) {
                tiers.textContent = 0;
                seconds.textContent++;
            }
            if (seconds.textContent == 60) {
                seconds.textContent = 0;
                minutes.textContent++;
            }
            loop();
        }, 15);

        stopBtn.addEventListener("click", () => {
            clearTimeout(interval);
            initializeBtn.removeAttribute("disabled");
            initializeBtn.style.backgroundColor = "red";
            initializeBtn.style.color = "white";

            initializeBtn.addEventListener("click", () => {
                tiers.textContent = "0" + 0;
                seconds.textContent = "0" + 0;
                minutes.textContent = "0" + 0;
            });
        });        
    })();
});
