# Functions

## Mixins
The boilerplate comes with `globals/_functions.js`, containing a bunch of shorthands I use a bunch, such as...

### Random stuff.

#### randomNumber(min,max)
Generates a random (whole) number between the minimum and maximum

**example:** `randomNumber(1,100);`

---

#### randomFrom(array)

If you have a simple array, this will pluck a random selection from that array.

**example:** `let hello = randomFrom(WelcomeMessages);`

#### shuffle(array)

havea a simple array? Or an array of objects? Use this to shuffle the order of all of them.

**example:** `shuffle(deckOfCards);`