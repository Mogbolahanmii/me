const womenCancel = document.getElementById('womencancel')
const menCancel = document.getElementById('mencancel')
const bagsCancel = document.getElementById('bagscancel')
const search = document.getElementById('search')

womenCancel.addEventListener('click', womencancel)
function womencancel(){
    const womenPopUp = document.querySelector('.women-popup')
    womenPopUp.style.display = 'none'
    // womenPopUp.textContent = ''
}

menCancel.addEventListener('click', mencancel)
function mencancel(){
    const menPopUp = document.querySelector('.men-popup')
    menPopUp.style.display = 'none'
    // menPopUp.textContent = ''
    // menPopUp.style.visibility = 'hidden'
}

bagsCancel.addEventListener('click', bagscancel)
function bagscancel(){
    const bagsPopUp = document.querySelector('.bags-popup')
    bagsPopUp.style.display = 'none'
    // bagsPopUp.textContent = ''
}

search.addEventListener('mouseover', searchSite)
function searchSite() {
    search.innerHTML = ''
    const searchSite = document.getElementById('searchsite')
    searchSite.style = 'display: block; position: fixed; right: 0; margin: 0.7rem;'
}

// function renew() {
//     menPopUp.style.visibility = 'visible'
// }