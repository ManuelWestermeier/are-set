export default function areSet(obj = {}, keys = [""]) {
    if (typeof obj != "object") return false;

    for (let index = 0; index < keys.length; index++)

        if (!(keys[index] in obj))
            return false

    return true

}

type key_type = [string, "bigint" | "boolean" | "function" | "number" | "object" | "string" | "symbol" | "undefined"];

export function areSetAndTheSameType(obj = {}, keys: key_type[]): boolean {
    if (typeof obj != "object") return false;

    for (let index = 0; index < keys.length; index++) {
        const [key, type] = keys[index];
        if (!(key in obj) || typeof obj[key] !== type) {
            return false;
        }
    }

    return true;
}

type KeyType = "string" | "number" | "boolean" | "object" | "function" | "undefined" | "symbol" | "bigint";

export function match(
    obj: any = {},
    keyObject: Record<string, KeyType> = { "name": "string" }
): boolean {
    if (obj === null || typeof obj !== "object") return false;

    for (const [key, expectedType] of Object.entries(keyObject)) {
        if (!(key in obj) || typeof obj[key] !== expectedType) {
            return false;
        }
    }

    return true;
}