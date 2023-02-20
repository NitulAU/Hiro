// console.log('test done');
const track=document.querySelector(".car__list");
const slides=Array.from(track.children);
const next=document.querySelector(".car__button--right");
const prev=document.querySelector(".car__button--left");
console.log(slides);
const slideWidth=slides[0].getBoundingClientRect().width;
console.log(slideWidth);

const slidePosition=(slide,index)=>{slide.style.left=slideWidth*index +'px'; };
slides.forEach(slidePosition);

const moveToSlide=(track,currentSlide, targetSlide)=>{
    track.style.transform='translateX(-'+targetSlide.style.left+')';
    console.log(targetSlide.style.left);
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
next.addEventListener('click',e=>{
    const currentSlide=track.querySelector('.current-slide');
    const nextSlide= currentSlide.nextElementSibling;
    // console.log(nextSlide);
    if(nextSlide!=null){
        moveToSlide(track,currentSlide,nextSlide);
    }
})
prev.addEventListener('click',e=>{
    const currentSlide=track.querySelector('.current-slide');
    const prevSlide= currentSlide.previousElementSibling;
    // console.log(nextSlide);
    if(prevSlide!=null){
        moveToSlide(track,currentSlide,prevSlide);
    }
})
