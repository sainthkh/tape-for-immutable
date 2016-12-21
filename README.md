# tape-for-immutable

This module is for those who want to use [tape](https://github.com/substack/tape) and [immutable.js](https://facebook.github.io/immutable-js/) together.

## Example

```js
const test = require('tape')
// You don't need any configuration.
// Just require it.
require('test-for-immutable')  

test("state is correct", t => {
	var state = Map({
		username: "guest",
		token: null,
		onSigningUp: true,
	})

	t.immutableEqual(state, Map({
		username: "guest",
		token: null,
		onSigningUp: true,
	}), "correct state")

	t.immutableNotEqual(state, Map({
		username: "vip guest",
		token: "random string", 
		onSigningUp: false,
	}), "incorrect state")
})

```

You can do the similar thing with `t.ok`. However, you will lose the data in the `immutable` object. 

## Note

When you compare nested objects. The object inside should be immutable object, too. For example:

```js
const test = require('tape')
require('test-for-immutable')  

test("state is correct", t => {
	// Wrong Example.
	var state1 = Map({
		username: "guest",
		token: null,
		error: [
			Error1,
			Error2,
		],
	})

	t.immutableEqual(state1, Map({
		username: "guest",
		token: null,
		error: [
			Error1,
			Error2,
		],
	}), "correct state") // -> Fails because error array in state1 and expected Map are different. (Not equal by ===)

	// Correct Example.
	var state2 = Map({
		username: "guest",
		token: null,
		error: List([
			Error1,
			Error2,
		]),
	})
	t.immutableEqual(state, Map({
		username: "vip guest",
		token: "random string", 
		error: List([
			Error1,
			Error2,
		]),
	}), "incorrect state") // -> Succeeds!
})

```
