//DOM-элементы в переменные
let Block1_elem = document.querySelector('.myBlock1')
let Block2_elem = document.querySelector('.myBlock2')
let Block3_elem = document.querySelector('.myBlock3')


namespace MyBlocks {

    export class TextEdit {
        constructor(public name:Element,public text:string) {
        }

        edit() {
            this.name.innerHTML = this.text
        }
    }


}
let block1 = new MyBlocks.TextEdit(Block1_elem,'BMW')
let block2 = new MyBlocks.TextEdit(Block2_elem,'AUDI')
let block3 = new MyBlocks.TextEdit(Block3_elem,'MERCEDES')

block1.edit()
block2.edit()
block3.edit()
