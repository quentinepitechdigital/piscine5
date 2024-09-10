window.onload = () => {
    const paragraphs = document.querySelectorAll('p');
    let index = 0
    paragraphs.forEach((paragraph) => {
        paragraph.textContent = index
        index++
    })
}