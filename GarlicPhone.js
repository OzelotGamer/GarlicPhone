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
var main = document.createElement("div");
main.innerHTML = "GARLIC<br>PHONE";
main.id = "glplogomain";
document.getElementById("glplogo").append(main);
var shadow = document.createElement("div");
shadow.innerHTML = "GARLIC<br>PHONE";
shadow.id = "glplogoshadow";
document.getElementById("glplogo").append(shadow);
var secshadow = document.createElement("div");
secshadow.innerHTML = "GARLIC<br>PHONE";
secshadow.id = "glplogoshadow";
secshadow.id = "glplogosecshadow";
document.getElementById("glplogo").append(secshadow);
var styles = document.createElement("style");
styles.innerHTML = "#glplogo{} #glplogomain{z-index: 5; color: #777799; font-size: 27px; position: absolute; top: 10%; left: 50%; transform: translate(-50%, -10%); font-weight: 300;} #glplogoshadow{z-index: 4; color: white; font-size: 28px; position: absolute; top: 10%; left: 50%; transform: translate(-50%, -10%); font-weight: 600;} #glplogosecshadow{z-index: 3; color: #777799; font-size: 29px; position: absolute; top: 10%; left: 50%; transform: translate(-50%, -10%); font-weight: 900;}";
document.getElementById("glplogo").append(styles);

setInterval(()=>{
for(i=0;i<document.getElementsByTagName("iframe").length;i++)
  {
  document.getElementsByTagName("iframe")[i].remove();
  }
 }, 100);
}
