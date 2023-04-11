var counter = document.getElementById("counter");
var plus = document.querySelector(".incr");
var moin = document.querySelector(".decr");

var count = 0;

plus.addEventListener("click", function() {
    count++;
    counter.innerHTML = count;

})

moin.addEventListener("click", function() {
    count--;
    counter.innerHTML = count;

})
