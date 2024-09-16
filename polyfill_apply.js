Function.prototype.myApply = function(context,arr){
    if(typeof this !== "function"){
        throw Error(this + " is not callable function");
    }
    context.myFunc = this;
    context.myFunc(...arr);
}