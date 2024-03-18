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
var styles = document.createElement("style");
styles.innerHTML = "#glplogo{} #glplogomain{z-index: 5; color: #777799; font-size: 27px; position: absolute; top: 10%; left: 50%; transform: translate(-50%, -10%); font-weight: 300; color: #30024f; text-shadow: 3px 3px 0 #ffffff, 3px -3px 0 #ffffff, -3px 3px 0 #ffffff, -3px -3px 0 #ffffff, 3px 0px 0 #ffffff, 0px 3px 0 #ffffff, -3px 0px 0 #ffffff, 0px -3px 0 #ffffff;}";
document.getElementById("glplogo").append(styles);

setInterval(()=>{
for(i=0;i<document.getElementsByTagName("iframe").length;i++)
  {
  document.getElementsByTagName("iframe")[i].remove();
document.getElementsByTagName("video")[i].remove();
  }
 }, 100);
}
