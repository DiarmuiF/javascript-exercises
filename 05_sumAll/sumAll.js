const sumAll = function() {

    const args = Array.from(arguments).sort()
    const start = args[0];
    const stop = args[1]

    let output = 0

    if (start < 0 || stop < 0 || typeof start != 'number' || typeof stop != 'number') {
        return "ERROR"
    }

    for (i = start; i <= stop; i++) {

        output += i

    }

    return output

};

// Do not edit below this line
module.exports = sumAll;
