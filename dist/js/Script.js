const Mobilebtn=document.querySelector('#mobile-btn')
const MobileMenu=document.querySelector('#mobile-menu')

Mobilebtn.addEventListener('click',()=>{
    MobileMenu.classList.toggle('hidden')
})