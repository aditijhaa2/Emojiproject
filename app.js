const closedface =document.querySelector ('.closed')
const openedface =document.querySelector ('.open')

// Add event listener
closedface.addEventListener('click',() => {
if(openedface.classList.contains('open')) {
    openedface.classList.add('active');
closedface.classList.remove('active');
}
})

openedface.addEventListener('click',()=> {
if(closedface.classList.contains ('closed')){
closedface.classList.add ('active');
openedface.classList.remove('active')
}
})