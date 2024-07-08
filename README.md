# are-set

## usage

```ts
import areSet, { areSetAndTheSameType } from "are-set"

const dataYouDontKnow = JSON.parse("{\"hello\": true}")

console.log(
    "keys are in object",
                           // keys in string array
    areSet(dataYouDontKnow, ["hello"])
)

cosnole.log(
    "are in the object and the same type",
                                        // [[key, type]]
    areSetAndTheSameType(dataYouDontKnow, [["hello", "boolean"]])
)

```