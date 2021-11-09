const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navlink = document.querySelectorAll('.nav-link li');
   
    burger.addEventListener('click', () => {
         //TOGGLE
        nav.classList.toggle('nav-active');
    
        //ANIMATE
        navlink.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0 }s`;
            }
        });

        //ANIMATE BURGER
        burger.classList.toggle('toggle');
    });
}
navSlide();