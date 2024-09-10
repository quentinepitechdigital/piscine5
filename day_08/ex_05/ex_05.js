window.onload = () => {
    const { createApp } = Vue;

    createApp({
        data() {
            return {
                message: 'The current time is ' + getCurrentTime()
            };
        }
    }).mount('#app');
}

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return hours + ':' + minutes;
}