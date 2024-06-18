const  mobile_menu = document.querySelector('.nav-mobile');
const  fa_open = document.getElementById('fa-open');
const  fa_close = document.getElementById('fa-close');

fa_open.addEventListener('click',
    function(){
        if(mobile_menu.style.display === 'none'){
            mobile_menu.style.display = 'block';
            fa_open.style.display = 'none';
            fa_close.style.display = 'block';
        } else {
            mobile_menu.style.display = 'none';
            fa_open.style.display = 'block';
            fa_close.style.display = 'none';
        }
});

fa_close.addEventListener('click',
    function(){
        if(mobile_menu.style.display === 'block'){
            mobile_menu.style.display = 'none';
            fa_open.style.display = 'block';
            fa_close.style.display = 'none';
        }
});
