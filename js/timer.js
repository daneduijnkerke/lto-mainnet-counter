// Set the date we're counting down to
var countUpDate = new Date("Jan 16, 2019 12:00:00").getTime();
console.log(countUpDate);
updateTime();

function updateTime() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = now - countUpDate;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("mainnet-countdown").getElementsByClassName('days')[0].innerHTML = days + "<span>Days</span>"
    document.getElementById("mainnet-countdown").getElementsByClassName('hours')[0].innerHTML = ('0' + hours).slice(-2) + "<span>Hours</span>"
    document.getElementById("mainnet-countdown").getElementsByClassName('minutes')[0].innerHTML = ('0' + minutes).slice(-2) + "<span>Minutes</span>"
    document.getElementById("mainnet-countdown").getElementsByClassName('seconds')[0].innerHTML = ('0' + seconds).slice(-2) + "<span>Seconds</span>"
}

// Update the count down every 1 second
setInterval(function() {
    updateTime();
}, 1000);