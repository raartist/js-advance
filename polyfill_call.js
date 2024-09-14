Function.prototype.myCall = function(context,...args){
    if(typeof this !== "function"){
        throw Error(this + " is not callable!!")
    }
    context.refFunc = this;
    context.refFunc(...args);
}