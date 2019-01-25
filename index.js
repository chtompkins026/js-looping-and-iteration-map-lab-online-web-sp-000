// Code your solution in this file.

function lowerCaseDrivers(array){ 
  return array.map(function(driver){ 
    return driver.toLowerCase();
  });
}

function nameToAttributes(obj){ 
 return obj.map(function(driver){ 
   return Object.assign({}, driver, {firstName: driver[0], lastName: driver[1]}); 
 }); 
}