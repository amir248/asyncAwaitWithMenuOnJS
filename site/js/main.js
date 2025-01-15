function openMenu(){
    return new Promise((resolve)=>{
        function oM(){
            let openM=document.createElement('script');
            openM.src="https://amir248.github.io/asyncAwaitWithMenuOnJS/site/js/menu.js";
            document.querySelector('body').append(openM);
        }
        resolve(oM());
    });
}
function date(){
    return new Promise((resolve)=>{
        function newDate(){
            let dates=document.createElement('script');
            dates.src="https://amir248.github.io/asyncAwaitWithMenuOnJS/site/js/data.js";
            document.querySelector('body').append(dates);
        }
        resolve(newDate());
    });
}
async function main(){
    await openMenu();
    await date();
}
window.addEventListener('DOMContentLoaded',main);