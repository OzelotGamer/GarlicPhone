/*
Hi this is the Code of Garlic Phone.
Feel free to suggest changes.
Im a beginner and this is just a little test Project.
I will comment on every little detail telling you what it is so even if you're not a programmer you can understand it.
*/
garinit();
function garinit(){
document.querySelectorAll('[role="button"]')[0].id = "glplogo";
document.getElementById("glplogo").innerHTML = "GARLIC<br>PHONE";
var shadow = document.createElement("div");
shadow.id = "glplogoshadow";
shadow.innerHTML = "<div id='glplogomain'>GARLIC<br>PHONE</div>";
document.getElementById("glplogo").append(shadow);
var styles = document.createElement("style");
styles.innerHTML = "#glplogo{} #glplogomain{color: white; font-size: 25px; position: absolute; top: 0%; left: 50%; transform: translate(-50%, 0%)} #glplogoshadow{color: white; font-size: 25px; position: absolute; top: 0%; left: 50%; transform: translate(-50%, 0%)}";
document.getElementById("glplogo").append(styles);

setInterval(()=>{
for(i=0;i<document.getElementsByTagName("iframe").length;i++)
  {
  document.getElementsByTagName("iframe")[i].remove();
  }
 }, 100);
}
