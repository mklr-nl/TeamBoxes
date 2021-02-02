function Headerfun(){
    const newLocal = ".Header__toggle";
    const toggleBtn = document.querySelector(newLocal);
    if(!toggleBtn){
        return;
    } else {
        const mobNav = document.querySelector(".Mobilenav");
        const intro = document.querySelector(".Intro");
        toggleBtn.addEventListener('click', toggleNav);
        function toggleNav () {
        console.log('hello')
         mobNav.classList.toggle('Mobilenav__collapse');
         intro.classList.toggle('Intro__extraPadding');
         // sectionIntro.classList.toggle('Move--row')
    }
}
}



Headerfun();