// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  const copyOfDrivers = drivers.slice();
  copyOfDrivers.push(name);
  //return copyOfDrivers;
}

function prependDriver(name){
}

function removeLastDriver(){
}

function removeFirstDriver(){
}
