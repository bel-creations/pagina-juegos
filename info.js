(function() {
    const openButton = document.querySelector('.info');
    const descripcion = document.querySelector('.descripcion');
    const closeDescripcion = document.querySelector('.close');

    openButton.addEventListener('click', () => {
        descripcion.classList.add('descripcion--show');
    })
    closeDescripcion.addEventListener('click', ()=> {
        descripcion.classList.remove('descripcion--show');
    })

}) ();