const container = document.querySelector('.container');
const sizebtn = document.querySelector('.size');
let size = 16;

sizebtn.addEventListener('click', () => {
    size = prompt("Size: ");
    container.innerHTML = '';
    makeCanvas(size);
})

function makeCanvas(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.style.display = 'flex';
        row.style.height = `${100/size}%`;
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.style.width = `${100/size}%`;
            row.appendChild(box);
        }
    }
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        });
    });
}

makeCanvas(size);


