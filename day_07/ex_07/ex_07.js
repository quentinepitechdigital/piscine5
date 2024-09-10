window.addEventListener('DOMContentLoaded', function() {
    let title = document.querySelector("h1")
    let freeze = false
    let trueFreeze = false
    let body = document.querySelector('body')

    function shuffle(array) {
        let currentIndex = array.length;
        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    }

    function randomizeTitle(){
        if (!freeze && !trueFreeze){
            words = title.innerText.split(' ')
            shuffle(words)
            title.innerText= words.join(' ')
        }

        setTimeout(function(){
            randomizeTitle()
        }, 2000);
    }

    title.addEventListener('mouseenter', event=>{
        freeze = true
    })
    title.addEventListener('mouseleave', event=>{
        freeze = false
    })
    title.addEventListener('click', event=>{
        trueFreeze = true
        navigator.clipboard.writeText(title.innerText);
    })
    body.addEventListener('click', event=>{
        if (event.target !== body)
            return
        trueFreeze = false
    })

    body.addEventListener('keypress', event=>{
        if (event.key === "!") {
            setTimeout(function(){
                alert("42!")
            }, 4200);
        }
    })

    randomizeTitle()
})