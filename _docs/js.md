#  TypeScript

I use some (client-side) Vue in my projects. Personally, I don't like to go crazy with it, I just put some stuff in the Vue architecture when I can use it. This project is now built with TypeScript for better type safety and developer experience.

###  Okay, how's it work?

`site.ts` is the main entry point and uses ES6 imports. It imports utility functions from `globals/_functions.ts`, variables from `partials/_variables.ts`, and initializes the Vue app from `partials/_vue.ts`.

The TypeScript files in the `ts/` folder are compiled to JavaScript in the `js/min/` folder. The compiled code uses ES modules and is loaded with `type="module"` in the HTML.

### Project Structure

- `ts/site.ts` - Main entry point
- `ts/globals/_functions.ts` - Utility functions
- `ts/partials/_variables.ts` - Site-wide variables  
- `ts/partials/_vue.ts` - Vue app initialization

To use functions from another file, simply import them:

```typescript
import { randomNumber, addCommas } from './globals/_functions.js';

const num = randomNumber(1, 100);
const formatted = addCommas(num);
```

I'll walk through a couple of the generic utility functions here.

## functions

####  randomNumber(min: number, max: number): number
Generates a random (whole) number between the minimum and maximum

**example:** 
```typescript
randomNumber(1,100);
```

---  
####  addCommas(number: number): string
Takes any large number and formats it like 10,232,021

**example:**  
```typescript
addCommas(10232021);
```

---  
####  percentOf(total: number, part: number): number
Calculates the percentage of `part` within `total`

**example:**  
```typescript
percentOf(37,14);
```

---
####  randomFrom<T>(array: T[]): T
If you have a simple array, this will pluck a random selection from that array.

**example:**
```typescript
let hello = randomFrom(WelcomeMessages);
```

---
####  shuffle<T>(array: T[]): T[]
Have a simple array? Or an array of objects? Use this to shuffle the order of all of them.

**example:**
```typescript
shuffle(deckOfCards);
```

---

#### findInArray<T>(haystack: T[], needle: T): number | null
Returns the index of an item if it's in the array, if it isn't, returns `null`

**example:** 
```typescript
if (findInArray(people,"Lemon") !== null) { 
  // do stuff.
}
```

#### removeFromArray<T>(haystack: T[], needle: T): void
Want to remove a particular string (or object) from an array? Do it like this.

**example:**
```typescript
removeFromArray(listOfNames,"Lemon");
```

---
#### sendEvent(category: string, action: string, label?: string, value?: number): void
This is meant to work with [Google Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/events). The function will send an event to Google with the variables specified. `label` and `value` are optional. Also, if you have a value, value *must* be a number (strings will cause an error in GA).
**example:**
```typescript
sendEvent("Merch","Merch Bought","XL Shirt",25);
```


If you want to use [Matomo](https://matomo.org/) instead of GA (which is a good choice), look [here](https://matomo.org/docs/event-tracking/) for similar syntax.
