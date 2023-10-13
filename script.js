function renderSquares() {
    const wrapper = document.querySelector('#wrapper')
    const reset = document.getElementById('reset')
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div')
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'red'
            reset.addEventListener('click', () => {
                div.style.backgroundColor = 'burlywood'
            })
        })
        wrapper.appendChild(div)
    }
}

renderSquares()