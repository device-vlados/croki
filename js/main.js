var blocks = document.getElementsByClassName("card__box-item");

// Add a click event listener to each block
for (var i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("click", function() {
    // Remove the active class from all blocks
    for (var j = 0; j < blocks.length; j++) {
        blocks[j].classList.remove("active");
    }
    // Add the active class to the clicked block
    this.classList.add("active");
    });
}

// Select the first block by default
blocks[0].classList.add("active");
// ---------------------------------------------------------------
const btns = document.querySelectorAll('.price-btns');
const oneActiveBtn = document.querySelector('.return');
const oneActiveBtns = document.querySelector('.returns');
const oneActiveBt = document.querySelector('.retur');
const oneActiveBts = document.querySelector('.returs');

btns.forEach((btn, index) =>{
    btn.addEventListener('click', () =>{
        console.log(index)
    const divs = document.querySelectorAll('.inclusive__box')
    divs.forEach(div =>{
        div.classList.remove('active')
    });
    divs[index].classList.add('active');
    });
});

oneActiveBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const divs = document.querySelectorAll('.inclusive__box');
    divs.forEach(div => {
        div.classList.remove('active');
    });
    divs[0].classList.add('active');
});

oneActiveBtns.addEventListener('click', (event) => {
    event.preventDefault();
    const divs = document.querySelectorAll('.inclusive__box');
    divs.forEach(div => {
        div.classList.remove('active');
    });
    divs[0].classList.add('active');
});

oneActiveBt.addEventListener('click', (event) => {
    event.preventDefault();
    const divs = document.querySelectorAll('.inclusive__box');
    divs.forEach(div => {
        div.classList.remove('active');
    });
    divs[1].classList.add('active');
    activeIndex = 1;
});

oneActiveBts.addEventListener('click', (event) => {
    event.preventDefault();
    const divs = document.querySelectorAll('.inclusive__box');
    divs.forEach(div => {
        div.classList.remove('active');
    });
    divs[1].classList.add('active');
    activeIndex = 1;
});
// ----------------------------------------------------------------------------