// Code your solution in this file.

function lowerCaseDrivers(array){ 
  return array.map(function(driver){ 
    return driver.toLowerCase();
  });
}

function nameToAttributes(obj){ 
 return obj.map(function(driver){ 
   let n = driver.split(" "); 
   return Object.assign({}, driver, {firstName: n[0], lastName: n[1]})
 }); 
}