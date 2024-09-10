function generatePos(windowWidth, windowHeight, imageSize) {
    return [
        Math.floor(Math.random() * (windowHeight - imageSize)),
        Math.floor(Math.random() * (windowWidth - imageSize))
    ];
}

new Vue({
    el: '#app',
    data: {
        imageTop: 0,
        imageLeft: 0
    },
    mounted() {
        document.addEventListener('mousemove', this.moveImage);
    },
    beforeDestroy() {
        document.removeEventListener('mousemove', this.moveImage);
    },
    methods: {
        moveImage(event) {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            const imageSize = 100
            const offset = 50;

            if (event.clientX > this.imageLeft - offset && event.clientX < this.imageLeft + imageSize + offset && event.clientY > this.imageTop - offset && event.clientY < this.imageTop + imageSize + offset) {
                let newDim
                do {
                    newDim = generatePos(windowWidth, windowHeight, imageSize);
                } while (event.clientX > newDim[1] - offset && event.clientX < newDim[1] + imageSize + offset && event.clientY > newDim[0] - offset && event.clientY < newDim[0] + imageSize + offset);
                this.imageTop = newDim[0];
                this.imageLeft = newDim[1];
            }
        }
    }
});
