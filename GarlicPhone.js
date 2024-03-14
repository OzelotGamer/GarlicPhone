/*
Hi this is the Code of Garlic Phone.
Feel free to suggest changes.
Im a beginner and this is just a little test Project.
I will comment on every little detail telling you what it is so even if you're not a programmer you can understand it.
*/
function garinit(){
document.querySelectorAll('[role="button"]')[0].innerHTML = "Garlic Phone"; //Deleting Gartic Phone title and replacing it with Garlic Phone.
setInterval(()=>{
  for(i=0;i<document.getElementsByTagName("iframe").length;i++)
  {
  document.getElementsByTagName("iframe")[i].remove();
  }
 }, 100); //Deleting IFrame ads, because ads are annoying (just like me).
}
