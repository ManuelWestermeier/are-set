# are-set

## usage

```ts
import areSet, { areSetAndTheSameType, match } from "are-set";

const dataYouDontKnow = JSON.parse('{"hello": true}');

// use this:
cosnole.log(
  "are in the object and the same type (with object as key value pair)",
  // [[key, type]]
  match(dataYouDontKnow, { hello: "boolean" })
);

// dont need typecheck
console.log(
  "keys are in object",
  // keys in string array
  areSet(dataYouDontKnow, ["hello"])
);

// other style
cosnole.log(
  "are in the object and the same type",
  // [[key, type]]
  areSetAndTheSameType(dataYouDontKnow, [["hello", "boolean"]])
);
```

## install

```bash
npm i are-set
```
