/*
Hi this is the Code of Garlic Phone.
Feel free to suggest changes.
Im a beginner and this is just a little test Project.
I will comment on every little detail telling you what it is so even if you're not a programmer you can understand it.
*/
garinit();
function garinit(){
document.querySelectorAll('[role="button"]')[0].id = "glplogo";
document.getElementById("glplogo").innerHTML = "";
document.getElementById("glplogo").removeAttribute("style");
var main = document.createElement("img");
main.src = "https://cdn.jsdelivr.net/gh/OzelotGamer/GarlicPhone@4d2a1631b29fe1733f37ad04e38487ed7192e5df/GarlicPhoneTitle.png";
main.id = "glplogomain";
document.getElementById("glplogo").append(main);
var styles = document.createElement("style");
styles.innerHTML = "#glplogo{width: 100%; height: 10%; position: absolute; top: 0%; left: 50%; transform: translate(-50%, 0%);} #glplogomain{width: 240px; height: 240px; position: absolute; top: 0%; left: 50%; transform: translate(-50%, 0%);}";
document.body.append(styles);

setInterval(()=>{
for(i=0;i<document.getElementsByTagName("iframe").length;i++)
  {
  document.getElementsByTagName("iframe")[i].remove();
document.getElementsByTagName("video")[i].remove();
  }
 }, 100);
}
/*
experimental charakter chooser

showCharacters();
function showCharacters(){
if(document.getElementById("CharContainer"))
document.getElementById("CharContainer"). remove();
var container = document.createElement("div");
container.id = "CharContainer";
document.body.append(container);
var contstyles = document.createElement("style");
contstyles.innerHTML = "#CharContainer{width: 75%; height: auto; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 50; background-color: #882222; border: 5px solid #441111; border-radius: 15px;}";
document.getElementById("CharContainer").append(contstyles);
for(i=0;i<=45;i++){
document.getElementById("CharContainer").innerHTML += '<img src="https://garticphone.com/images/avatar/' + i + '.svg" style="width: 50px; height: 50px;" onclick="localStorage.setItem(\'avatar\', \'' + i + '\'); hideCharacters(); document.getElementsByClassName(\'avatar\')[0].querySelector(\'span\').style.backgroundImage = \'url(\\\'/images/avatar/' + i + '.svg\\\')\';"></img>'
}
}

function hideCharacters(){
document.getElementById("CharContainer").remove();
}
*/
