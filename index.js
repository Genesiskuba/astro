const cartIcon = document.querySelector(",cart-icon");
const modal = document.getElementById("modal")

cartIcon.addEventListener("click", () =>{
    if(modal.style.display === "none" ||  modal.style.display ===""){
        showmodal();
    } else{
        hidemodal();
    }
})


