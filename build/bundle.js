"use strict";
//DOM-элементы в переменные
let Block1_elem = document.querySelector('.my-block1');
let Block2_elem = document.querySelector('.my-block2');
let Block3_elem = document.querySelector('.my-block3');
//Работа с блоками
var MyBlocks;
(function (MyBlocks) {
    class BlocksEdit {
        constructor(name) {
            this.name = name;
        }
        editText(text) {
            if (this.name.length === text.length) {
                this.name.forEach((item, index) => item.innerText = text[index]);
            }
            else {
                throw new Error('Incorrect elements count');
            }
        }
        handleClickDownUp() {
            this.name.forEach((item) => item.addEventListener('click', (event) => {
                item.classList.toggle('for-toggle-blocks');
            }));
        }
    }
    MyBlocks.BlocksEdit = BlocksEdit;
})(MyBlocks || (MyBlocks = {}));
let blocksEdit = new MyBlocks.BlocksEdit([Block1_elem, Block2_elem, Block3_elem]);
blocksEdit.editText(['BMW', 'MERCEDES', 'AUDI']);
blocksEdit.handleClickDownUp();
//# sourceMappingURL=bundle.js.map