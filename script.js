window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#D3D3D3';
    } else {
        navbar.style.backgroundColor = '#FFFFFF';
    }
});
