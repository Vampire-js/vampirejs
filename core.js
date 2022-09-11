export const createApp = (state , ui, methods) => {
    document.getElementById("app").innerHTML = ui()
    methods()
    }

        