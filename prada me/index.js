const womenPopUp = document.querySelector('.women-popup')
const menPopUp = document.querySelector('.men-popup')
const bagsPopUp = document.querySelector('.bags-popup')
const menCancel = document.getElementById('mencancel')
const womenCancel = document.getElementById('womencancel')
const bagsCancel = document.getElementById('bagscancel')

womenCancel.addEventListener('click', womencancel)
function womencancel(){
    womenPopUp.textContent = ''
    // womenPopUp.style.display = 'none'
}

menCancel.addEventListener('click', mencancel)
function mencancel(){
    menPopUp.textContent = ''
}

bagsCancel.addEventListener('click', bagscancel)
function bagscancel(){
    bagsPopUp.textContent = ''
}