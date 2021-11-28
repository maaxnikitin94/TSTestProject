//DOM-элементы в переменные
let Block1_elem = document.querySelector('.my-block1')
let Block2_elem = document.querySelector('.my-block2')
let Block3_elem = document.querySelector('.my-block3')


//Работа с блоками
namespace MyBlocks {
    export class BlocksEdit {
        constructor(public name: Element[]) {
        }

        editText(text: string[]) {
            if (this.name.length === text.length) {
                this.name.forEach((item: HTMLElement, index: number) => item.innerText = text[index])
            } else {
                throw new Error('Incorrect elements count')
            }
        }

        handleClick() {
            this.name.forEach((item: HTMLElement) => item.addEventListener('click', (event) => {
                item.classList.toggle('for-toggle-blocks')
            }))
        }
    }


}
let blocksEdit = new MyBlocks.BlocksEdit([Block1_elem, Block2_elem, Block3_elem])
blocksEdit.editText(['BMW', 'MERCEDES', 'AUDI'])
blocksEdit.handleClick()
