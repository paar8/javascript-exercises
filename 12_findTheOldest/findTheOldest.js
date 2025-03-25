const findTheOldest = function (arr) {
   return arr.reduce((oldest, youngest)=>{
    const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    const youngestAge = getAge(youngest.yearOfDeath, youngest.yearOfBirth);

    return oldestAge > youngestAge ? oldest : youngest;

   })
};

function getAge(deathyear, birthyear) {
  if (!deathyear) {
    let currentDate = new Date();
    deathyear = currentDate.getFullYear();
  }
  return deathyear - birthyear;
}

// Do not edit below this line
module.exports = findTheOldest;
