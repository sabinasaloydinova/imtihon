
var elInp1 = document.querySelector('.inp')
var elTitle = document.querySelector('.title')

function fn() {
    if (elInp1.value != elInp1.value.toLowerCase()) {
        elTitle.textContent = 'Qabul qilindi!'
        elInp1.style.borderBottomStyle = 'solid'
        elInp1.style.borderBottomColor = 'green'
        elInp1.style.backgroundColor = 'green'
        

    }else{
        elTitle.textContent = ' Katta harflardan  foydalaning!'
        elInp1.style.borderBottomStyle = 'solid'
        elInp1.style.borderBottomColor = 'red'
        elInp1.style.backgroundColor = 'red'
    }
}