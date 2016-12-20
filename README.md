# Working with filters

This example transforms text to emojis.

We use the following [Koa elements](https://github.com/KingofApp/docs/tree/master/themes#list-of-elements):
* koa-textarea
* koa-button

The koa-textarea contains the text that will be converted :

```javascript
<koa-textarea label="{{'filterSample.writeHere' | translate}}" ng-model="text.input"></koa-textarea>
```

Ng-click from the koa-button calls the ```traslate``` function to trigger the filter.
```javascript
<koa-button ng-click="translate()"> {{'filterSample.clickHere' | translate}} </koa-button>
```

The list of emojis is obtained from ```emoji.json```. The filter splits words and replaces each one of them by the equivalent emoji. The filter is in the filter.js file and has the following code:

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
          out += ' ';
        }
      }
      return out;
    }
  }
}());
```
