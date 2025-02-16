function modifytext(){
    let s=document.getElementById("itext");
    let sz=document.getElementById("size");
    let fc=document.getElementById("color");
    s.innerHTML=s.value;
    s.style.fontSize=sz.value+"px";
    s.style.color=fc.value;
    s.style.fontFamily="Ariel , sans-serif"; 

}