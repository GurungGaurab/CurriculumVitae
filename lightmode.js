let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById("theme-switch");



const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
}

const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);

}
if (lightmode === "active") enableLightmode()

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode');
    lightmode !=="active" ? enableLightmode() : disableLightmode()
})

function toggleText() {
    const verify = document.getElementById("verify");
    if (verify.style.display === "none" || verify.style.display ===""){
        verify.style.display ="block";}
        else{
            verify.style.display= "none";
        }
    }


function verifyID(){
    const id = document.getElementById("hkid").value;
    const message = document.getElementById("hkid-check");
    const wrong = document.getElementById("hkid-wrong")
    const myidnum = "Y589"
    if (id == myidnum){
        message.style.display = "block";
  
    }
    else{
        message.style.display = "none";
        
    }
        
    }
    document.getElementById('hkid').addEventListener('input', verifyID);

    function getResult(){
        const result = document.getElementById("Results");
    if (result.style.display === "none" || result.style.display ===""){
        result.style.display ="block";}
        else{
            result.style.display= "none";
        }
    }
    function getJob(){
        const intern = document.getElementById("intern");
    if (intern.style.display === "none" || intern.style.display ===""){
        intern.style.display ="block";}
        else{
            intern.style.display= "none";
        }
    }
