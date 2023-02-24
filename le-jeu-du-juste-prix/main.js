// Page
const cb = document.getElementById("cb")

cb.addEventListener("click", function() {
    window.location.href = "../index.html";
})


// Game
const b = document.getElementById('b');

function play() {
    var word = Math.floor(Math.random() * 1000) +1;
    var p = prompt('Choose a number between 1 and 1000');

    do {
        if (p == null) {
            p = alert('Bye!')
            break
        }
        if (p < word) {
            p = prompt("It's higher !");
        } else {
            p = prompt("It's less !");
        }
    } while (p != word);

    function playagain() {
        p = prompt("Right ! Play again (yes/no)");

        if (p == "yes") {
            play();
        }
        else if (p == "no") {
            p = confirm('Bye!')
        }
    }

    if (p == word) {
        playagain()
    }

}

b.addEventListener("click", function() {
    play();
});