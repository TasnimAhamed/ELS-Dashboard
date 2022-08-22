// Collapse side nav
if (localStorage.collapse === 'collapsed' || (!('collapse' in localStorage)) ) {
    document.documentElement.classList.remove('not-collapsed')
    document.documentElement.classList.add('collapsed')
} else {
    document.documentElement.classList.add('not-collapsed')
    document.documentElement.classList.remove('collapsed')
}
document.getElementById('collapse--nav').addEventListener('click',function(e){
    if (localStorage.collapse === 'collapsed' || (!('collapse' in localStorage))) {
        localStorage.collapse = 'not-collapsed'
        document.documentElement.classList.remove('collapsed')
        document.documentElement.classList.add('not-collapsed')
    } else {
        localStorage.collapse = 'collapsed'
        document.documentElement.classList.add('collapsed')
        document.documentElement.classList.remove('not-collapsed')
    }
})


// Open side Navigation

const toogler=document.getElementById('toggle__menu')
toogler.addEventListener('click',function(e){
    document.getElementById("esl-sidenav").classList.toggle('active')
})


// Stop propagation

document.querySelector(".store--label .dropdown-menu").addEventListener("click",(e)=>{
    e.stopPropagation();                 
})
document.querySelector(".store--management .dropdown-menu").addEventListener("click",(e)=>{
    e.stopPropagation();                 
})