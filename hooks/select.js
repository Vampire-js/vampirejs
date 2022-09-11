export function select (e) {

    return document.getElementById(`${e}`)
}


export function setValue (e , callback) {
    let value;
    value = callback()
    document.getElementById(`${e}`).innerHTML = value
}