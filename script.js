function renderSquares() {
    const wrapper = document.querySelector('#wrapper')
    
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div')
        
        wrapper.appendChild(div)
    }
}

renderSquares()