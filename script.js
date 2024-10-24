const button=document.querySelector(".btn")
const cont=document.querySelector(".contenor")

button.addEventListener("click",(e)=>{
    e.preventDefault()

    if(button.innerText==="light"){
        cont.style.backgroundColor="black"
        button.innerText="Dark";
        button.style.color="black";
        button.style.backgroundColor="white"
    }else{
        cont.style.backgroundColor="white"
        button.innerText="light";
        button.style.backgroundColor="black"
        button.style.color="white";
    }
})
    
