# Working with filters

This example transform a text chain into emojis if presents.

We use the following [Koa elements](https://github.com/KingofApp/docs/tree/master/themes#list-of-elements):
* koa-textarea
* koa-button

The koa-textarea is the input of the text which is going to be transformed :

```javascript
<koa-textarea label="{{'filterSample.writeHere' | translate}}" ng-model="text.input"></koa-textarea>
```

In the koa-button we use ng-click to call a ```traslate``` function wich manage assign the value of the input to the filter.
```javascript
<koa-button ng-click="translate()"> {{'filterSample.clickHere' | translate}} </koa-button>
```

The list of emojis comes from ```emoji.json```. The filter separate words by spaces from input and replace each one by a emoji if exists in the list. The filter is in the file filter.js and it has the following code:

``` javascript
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
```
