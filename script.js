const qr=document.querySelector(".qrcode"),
input=document.querySelector(".work input"),
generateBtn=document.querySelector(".work button"),
qrOp=document.querySelector(".pic img");

let prevcode;
generateBtn.addEventListener("click",() => {
    let val= input.value.trim();
    if(!val || prevcode==val){
        return;
    }
    prevcode=val;
    generateBtn.innerText="Generating QR Code....";
    qrOp.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";
    qrOp.addEventListener("load",()=>{
        qr.classList.add("active");
        generateBtn.innerText="Generate QR Code";
    });
});
    input.addEventListener("keyup",() =>{
        if(!val){
           qr.classList.remove("active");
           prevcode="";
        }
});