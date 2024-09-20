Array.prototype.myConcat = function () {
  let arr = [...this];
  const args = arguments;

  for(let i = 0; i<args.length; i++){
    if(Array.isArray(args[i])){
      arr = [...arr,...args[i]];
    }else{
      arr.push(args[i]);
    }
  }
  return arr;
};