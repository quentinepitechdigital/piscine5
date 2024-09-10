window.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item')
    console.log(items,'te')

    items.forEach(item => {
        item.querySelector(".delete-btn").addEventListener('click', event=>{
            item.remove()
        })
        item.querySelector(".like-btn").addEventListener('click', event=>{
            item.querySelector(".like-btn").classList.toggle("is-active")
        })
        item.querySelector(".plus-btn").addEventListener('click', event=>{
            item.querySelector("input[name='name']").value ++
        })
        item.querySelector(".minus-btn").addEventListener('click', event=>{
            item.querySelector("input[name='name']").value --
        })


    });
})