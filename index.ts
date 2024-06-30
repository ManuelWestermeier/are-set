export default function areSet(obj = {}, keys = [""]) {

    for (let index = 0; index < keys.length; index++)

        if (!(keys[index] in obj))
            return false

    return true

}

type key_type = [string, "bigint" | "boolean" | "function" | "number" | "object" | "string" | "symbol" | "undefined"];

export function areSetAndTheSameType(obj: { [key: string]: any } = {}, keys: key_type[]): boolean {
    for (let index = 0; index < keys.length; index++) {
        const [key, type] = keys[index];
        if (!(key in obj) || typeof obj[key] !== type) {
            return false;
        }
    }

    return true;
}