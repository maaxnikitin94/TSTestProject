//DOM-элементы в переменные
let Block1_elem = document.querySelector('.my-block1') as HTMLDivElement
let Block2_elem = document.querySelector('.my-block2')as HTMLDivElement
let Block3_elem = document.querySelector('.my-block3')as HTMLDivElement


//Работа с блоками
namespace MyBlocks {
    export class BlocksEdit {
        constructor(public name: HTMLDivElement[]) {
        }

        editText(text: string[]) {
            if (this.name.length === text.length) {
                this.name.forEach((item: HTMLDivElement, index: number) => item.innerText = text[index])
            } else {
                throw new Error('Incorrect elements count')
            }
        }

        handleClickDownUp() {
            this.name.forEach((item: HTMLElement) => item.addEventListener('click', (event) => {
                item.classList.toggle('for-toggle-blocks')
            }))
        }
    }


}
let blocksEdit = new MyBlocks.BlocksEdit([Block1_elem, Block2_elem, Block3_elem])
blocksEdit.editText(['BMW', 'MERCEDES', 'AUDI'])
blocksEdit.handleClickDownUp()


