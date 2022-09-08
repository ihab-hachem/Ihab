document.getElementById("menu").addEventListener("click",()=>{
    if(document.getElementById("drawer").style.display=="flex")
    {
        document.getElementById("drawer").style.display="none";
    }else{
        document.getElementById("drawer").style.display="flex"
    }
})

if (screen.width>870)
{
    document.getElementById("drawer").style.display="none";
}