const button1 = document.getElementById("button1");
let audio1 = new Audio();
audio1.src =
  "./audio/Epic Dark Mysterious Music (Copyright and Royalty Free) Black Fingerprint.mp3";

button1.addEventListener("click", function () {
  audio1.play();
  audio1.addEventListener("playing", function () {
    console.log("Audio 1 started playing!");
  });
  audio1.addEventListener("ended", function () {
    console.log("Audio 1 ended!");
  });
});
