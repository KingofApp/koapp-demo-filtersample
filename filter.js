(function() {
  'use strict';
  
  angular
    .module("filterSample")
    .filter('toEmoji', toEmoji);


  function toEmoji() {
    return function (input, params) {
      input = input || '';
      var inputArray = input.split(' ');
      var out = '';
      if(params){
        for(var word in inputArray){
          out += params.data[inputArray[word]] || inputArray[word];
          out += " ";
        }
      }
      return out;
    }
  }
}());
