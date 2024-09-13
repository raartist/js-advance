Array.prototype.myEvery = function(callback){
    if(typeof callback !== "function"){
        throw Error("Polyfill - every : Callback is undefined!")
    }
    const array = this;
    for (let index = 0; index < array.length; index++) {
        const result = callback(array[index],index,array);
        if(!result){
            return false;
        }
    }
    return true;
}