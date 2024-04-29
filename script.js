var modal=document.getElementById("leadModal");
var btnNoThx=document.getElementById("btnNo");
btnMailto.onclick=function(){
document.getElementById("btnMailto").innerHTML="A très bientôt";
}
window.onscroll=function(){modalHomePage()};
console.log(modal, 'console log de modal')
function modalHomePage(){
    if(
    document.body.scrollTop>350||document.documentElement.scrollTop>350){
        modal.style.display="block";
        window.onscroll=null;
    }

}
btnNoThx.onclick=function(){
    modal.style.display="none";
}