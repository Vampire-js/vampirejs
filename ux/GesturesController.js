export class GestureController{
    constructor(el){
        this.el = el
    }
    onStart(callback){
        this.el.addEventListener('touchstart', callback);
    }
    onMove(callback){
        this.el.addEventListener('touchmove', callback);
    }
    onEnd(callback){
        this.el.addEventListener('touchend', callback);
    }
}