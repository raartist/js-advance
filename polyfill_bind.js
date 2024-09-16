Function.prototype.myBind = function(context, ...args){
    if(typeof this !== "function"){
        throw Error(this + " is not a callable function.")
    }
    context.myFn = this;
    return function(...otherArgs){ // we are returning function here because bind can store function in a variable, so we need to return a function here.
        context.myFn(...args, ...otherArgs);
    }
}