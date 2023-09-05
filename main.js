// Dark Mode
const sec = document.querySelector('.sec');
const toggle = document.querySelector('.toggle-dark');
toggle.onclick = function(){
    sec.classList.toggle('dark')
}

// Contact Form

function openForm(){
    document.querySelector('.contact-form').style.display = "block"
}

function closeForm(){
    document.querySelector('.contact-form').style.display = "none"
}

// Read More of Description

document.addEventListener('DOMContentLoaded', () =>{
    const expandsMore = document.querySelectorAll('[expand-more]')

    function expand() {
        const showContent = document.getElementById(this.dataset.target)
        if (showContent.classList.contains('expand-active')) {
            this.innerHTML=this.dataset.showtext
        } else {
            this.innerHTML=this.dataset.hidetext
        }
        showContent.classList.toggle('expand-active')
    }
    expandsMore.forEach(expandContent => {
        expandContent.addEventListener('click', expand)
    })
})