const display = document.querySelector('.display');
let seconds = 0;
let timeInterval;

function getSeconsds(s) {
    const date = new Date(s * 1000);
    return date.toLocaleTimeString('pt-br', {
        timeZone: 'UTC',
        hour12: false
    }
    )
}

function showTime() {
    timeInterval = setInterval(function() {
        seconds++;
        display.innerHTML = getSeconsds(seconds);
    }, 1000);
}

addEventListener('click', function(e) {
    const element = e.target;
        if (element.classList.contains('btn-start')) {
        clearInterval(timeInterval)
        showTime();
    }
    if (element.classList.contains('btn-pause')) {
        clearInterval(timeInterval)
    }
    if (element.classList.contains('btn-stop')) {
        seconds = 0;
        clearInterval(timeInterval)
        display.innerHTML = '00:00:00'
    }
})