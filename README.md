# are-set

## usage

```ts
import areSet from "are-set"

const dataYouDontKnow = JSON.parse("{}")

console.log(
    areSet(dataYouDontKnow, ["key"]) ?
    "keys are in object" : "keys arent in the object"
)
```