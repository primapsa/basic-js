const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) { 
 if(!date) return 'Unable to determine the time of year!';
 if(!(date instanceof Date)) throw new Error('Invalid date!');
 if((date[Symbol.toStringTag] == 'Date' )) throw new Error('Invalid date!');

 const month = date.getMonth() + 1;

  let season = 'winter'; 
  if ( month >= 3 && month <= 5 ){
    season = "spring";
  }else if( month >= 6 && month <= 8){
    season = "summer";
  }else if( month >= 9 && month <= 11){
    season = "autumn";
  }
return season;
}

module.exports = {
  getSeason
};
