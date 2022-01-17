//Stretch
function createBase(base){
    return function(num){
        return base + num;
    }
}

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27