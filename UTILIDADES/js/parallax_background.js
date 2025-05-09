//establecer la imagen de fondo
document.getElementById("parallax").style.backgroundImage = "url('/img/4884841.jpg')";

window.addEventListener('scroll', () => {
    const parallax = document.getElementById("parallax");
    const scrollPosition = window.scrollY;
    // console.log(scrollPosition);
    parallax.style.backgroundPositionY = (scrollPosition * 0.7) + 'px';
})