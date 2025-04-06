export default function areSet(obj = {}, keys = [""]) {
    if (typeof obj != "object") return false;

    for (let index = 0; index < keys.length; index++)
        if (!(keys[index] in obj))
            return false;

    return true;
}

export function areSetAndTheSameType(obj = {}, keys = ["", ""]) {
    if (typeof obj != "object") return false;

    for (let index = 0; index < keys.length; index++) {
        const [key, type] = keys[index];
        if (!(key in obj) || typeof obj[key] !== type)
            return false;
    }

    return true;
}

export function match(obj = {}, keyObject = { "name": "type" }) {
    if (typeof obj != "object") return false;

    const keys = Object.entries(keyObject);
    for (let index = 0; index < keys.length; index++) {
        const [key, type] = keys[index];
        if (!(key in obj) || typeof obj[key] !== type)
            return false;
    }

    return true;
}