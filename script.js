var modal = document.getElementById("myModal");
var btn = document.getElementById("change");
var kirim = document.getElementById("kirim");

var date = new Date();
document.getElementById("last-updated").innerText = date.toLocaleDateString("id-ID") + " " + date.toLocaleTimeString("id-ID");

btn.onclick = function () {
    pesan.style.display = 'block';
    kirim.style.display = 'block';
    btn.style.display = 'none';
}

kirim.addEventListener('click', () => {
    var pesan = document.getElementById("pesan");
    var wait = document.getElementById("waitTime");
    var newText = pesan.value;
    wait.innerText = newText;
    function countdownTimer(){};
    pesan.style.display = 'none';
    kirim.style.display = 'none';
    btn.style.display = 'block';
})