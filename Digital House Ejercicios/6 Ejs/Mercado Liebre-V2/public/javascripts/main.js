(function(){
    let movil = document.getElementById('movil')
    let menu = document.getElementById('principal')
    console.log(movil, menu);
    
    movil.addEventListener('click', function(){
        menu.style.display = menu.style.display == 'block'? 'none': 'block';
    })
})()