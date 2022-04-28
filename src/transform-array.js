const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  if(!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');

   function readControl(text, position, arr){
    text = text.match(/[a-z]+\-[a-z]+/gi);
    text =text[0].split('-');    
    switch(text[0]){
      case 'double': text[1] == 'next' ? arr.splice(position, 1, arr[position + 1]) : (position-1) !== null ? arr.splice(position, 1, arr[position - 1]) : '';
           
        break;
      case 'discard': text[1] == 'next' ? arr.splice(position, 2, null,null) : arr.splice(position-1, 2, null,null);
        break;
          }    
   }
   let mapped = [...arr];  
   mapped.map((el, ind, mapp) => { 
   
     if(isFinite(el)) return;
     if(typeof (el) =='number' || typeof(el) =='string'){
    // console.log(el);
    if(typeof(el) =='string'){
     if(mapp[ind - 1] && mapp[ind + 1]) {
     readControl(el, ind, mapp)
     }else {
       if(mapp.length > 2){
        mapp.splice(ind, 1);
       }
      //  else{
      //    return;
      //  }      
     }
    }

     }
    return});
     let m2 = mapped.filter((el) => el !== null)
     return m2;

   // throw new NotImplementedError('Not implemented'); 
}

 //console.log(transform([ '--double-prev', { foo: 'bar' } ]))
/*
          [ '--double-next', '1' ] to deeply equal [ '1', '1' ]
 expected [ 4, 4, 2 ] to deeply equal [ '--discrard-prev', 4, 4, 2 ]
 expected [ Array(3) ] to deeply equal [ Array(4) ]
 expected [ true, '--discrard-next', 4 ] to deeply equal [ Array(4) ]
 expected [ 5, 5, 2 ] to deeply equal [ 5, 5, 5, 2 ]
 expected [ '--double-next', 3 ] to deeply equal [ 3, 3 ]
         
*/
module.exports = {
  transform
};
