const removeFromArray = function() {

    args = Array.from(arguments);

    array = args[0]
    elements = args.slice(1);

    for (let i = 0; i < elements.length; i++) {

        let location = array.indexOf(elements[i]);

        if (location > -1){

            array.splice(location, 1);
        
        }
    }

    return array

};

// Do not edit below this line
module.exports = removeFromArray;
