export function result(stat, msg, res) {
    let result = {
        status: stat,
        msg: msg,
        res: res
    };
    if (stat) {
        return result;
    }
    else {
        // future use
        return result;
    }
}
