export default function areSet(obj = {}, keys = [""]) {

    for (let index = 0; index < keys.length; index++)

        if (!(keys[index] in obj))
            return false

    return true

}

export function areSetAndTheSameType(obj = {}, keys = ["", ""]) {
    for (let index = 0; index < keys.length; index++) {
        const [key, type] = keys[index];
        if (!(key in obj) || typeof obj[key] !== type)
            return false;
    }

    return true;
}