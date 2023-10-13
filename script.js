let columns = 0

function setGridSize() {
    const wrapper = document.querySelector('#wrapper')
    const width = document.getElementById('grid-width').value

    if (width > 16) {
        alert('Max width 16')
        return
    }

    const outer_wrapper = document.querySelector('#outer-wrapper')
    columns = width
    wrapper.style.width = (width * 40) + ((width - 1) * 10) + 'px;'
    renderSquares()
    wrapper.remove()
}

function renderSquares() {
    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'wrapper')
    const outer_wrapper = document.querySelector('#outer-wrapper')
    const reset = document.getElementById('reset')

    for (let i = 0; i < (16 * columns); i++) {
        const div = document.createElement('div')
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'red'
            reset.addEventListener('click', () => {
                div.style.backgroundColor = 'burlywood'
            })
        })
        wrapper.appendChild(div)
    }
    outer_wrapper.append(wrapper)
}
