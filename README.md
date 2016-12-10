# tape-for-immutable

This module is for those who want to use [tape](https://github.com/substack/tape) and [immutable.js](https://facebook.github.io/immutable-js/) together.

## Example

```js
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