#  Javascript

I use some (client-side) Vue in my projects. Personally, I don't like to go crazy with it, I just put some stuff in the Vue architecture when I can use it. And just like with the pug and Sass, I handle js with a series of imports.

###  Okay, how's it work?

`site.js` does a couple imports, start with a generic partial of general use functions, then it looks for sitewide variables, and finally defines your Vue model. You can add more partials to this process. You can also elect to import js libraries as part of this step. 

I'll walk through a couple of the generic javascript functions here.

## functions

####  randomNumber(min,max);
Generates a random (whole) number between the minimum and maximum

**example:**  `randomNumber(1,100);`

---  

####  addCommas(number);
Takes any large number and formats it like 10,232,021

**example:**  `addCommas(10232021);`


####  randomFrom(array);
If you have a simple array, this will pluck a random selection from that array.

**example:**  `let hello = randomFrom(WelcomeMessages);`

-- -
####  shuffle(array);
Have a simple array? Or an array of objects? Use this to shuffle the order of all of them.

**example:**  `shuffle(deckOfCards);`

---

#### findInArray(hackstack,needle);
Returns the index of an item if it's in the array, if it isn't, returns `null`

**example:** 
```js
if (findInArray(people,"Lemon") != null) { 
  // do stuff.
}
```

#### removeFromArray(haystack,needle);
Want to remove a particular string (or object) from an array? Do it like this.

**example:** `removeFromArray(listOfNames,"Lemon");`

---

#### sendEvent(category,action,label,value);
This is meant to work with [Google Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/events). The function will send an event to Google with the variables specified. `label` and `value` are optional. Also, if you have a value, value *must* be a number (strings will cause an error in GA.
**example:** `sendEvent(listOfNames,"Lemon");`

If you want to use [Matomo](https://matomo.org/) instead of GA (which is a good choice), look [here](https://matomo.org/docs/event-tracking/) for similar syntax.