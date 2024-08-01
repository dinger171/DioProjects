function RsizetoMsize() {
  var Minecraftsize = document.getElementById("realsizeinput").value / 180;
  document.getElementById("output").innerHTML = Minecraftsize

  document.getElementById("command").innerHTML =
    "/attribute @s minecraft:generic.scale base set " + Minecraftsize;
}
setInterval(() => {
  RsizetoMsize();
}, 50);

function copycommand() {
  // Get the text content from the element with ID "command"
  var copyText = document.getElementById("command").textContent;
  navigator.clipboard.writeText(copyText);
}

function copysize() {
  // Get the text content from the element with ID "command"
  var copyText = document.getElementById("output").textContent;
  navigator.clipboard.writeText(copyText);
}