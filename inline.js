const select = document.querySelectorAll(".tabs-item")
const brand = document.querySelectorAll(".brand-img")

select.forEach((sel,i) => {
    sel.addEventListener("click",function(){
        select.forEach(item => item.classList.remove("select"))
        sel.classList.add("select")
        brand.forEach(brand => brand.classList.remove("select"))
        brand[i].classList.add("select")
    })
})