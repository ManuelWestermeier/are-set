export default function areSet(obj = {}, keys = [""]) {

    for (let index = 0; index < keys.length; index++)

        if (!(keys[index] in obj))
            return false

    return true

}