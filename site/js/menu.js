const textMenu="<h3><a href='#one'>one list</a></h3><h3><a href='#two'>two list</a></h3><h3><a href='#three'>three list</a></h3>";
document.querySelector('#menu').addEventListener('click',()=>{
    const openMenu=document.createElement('div');
    openMenu.classList.add('openMenu');
    openMenu.innerHTML=`${textMenu}`;
    document.querySelector('body').prepend(openMenu);
    setTimeout(()=>{
        document.querySelector('.openMenu').style.cssText=`width:100%;font-size:33px;`
    },300);
    closeMenu();
});
function closeMenu(){
    document.querySelector('.openMenu').addEventListener('click',()=>{
        document.querySelector('.openMenu').style.cssText=`width:0;right:0;left:100%;`;
        setTimeout(()=>{
            document.querySelector('.openMenu').remove();
        },1300);
    });
    
}