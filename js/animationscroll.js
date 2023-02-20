window.addEventListener('scroll',reveal);

function reveal(){
    const services=document.querySelector('.services');
    var windowHeight=window.innerHeight;
    var serTop=services.getBoundingClientRect().top;
    console.log(windowHeight,serTop);
    if(serTop<windowHeight-150){
        services.classList.add('service-reveal');
    }
    else{
        services.classList.remove('service-reveal');
    }
}