function addTwoIntegers(firstInteger, secondInteger) {
    //console.log(firstInteger + secondInteger);
    //return firstInteger + secondInteger                         //leállítja a műveletet vagy visszaküld
    //return "hello"
    if(typeof firstInteger === "number" && typeof secondInteger === "number"){
        return firstInteger + secondInteger
    } else{
        return "valamelyik argumentum nem szám, ezért a művelet nem elvégezhető"
    }
    

}

console.log (addTwoIntegers(12, 13) );
console.log (addTwoIntegers(1920, 85) );
console.log (addTwoIntegers(13, "alma") );
console.log(0 === "0");
console.log(0 === 0);
console.log("0" === "0");
console.log(addTwoIntegers (90, "90") );
console.log("alma" === 6);


function returnParam(parameter) {
  //console.log(parameter)
  return `<h1>${parameter}</h1>` 

}

//returnParam(1990);
console.log( returnParam("helo") )