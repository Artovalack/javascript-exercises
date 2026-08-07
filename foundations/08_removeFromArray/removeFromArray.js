const removeFromArray = function (arr, item) {
    removedItem = arr.indexOf(item);
    arr.splice(removedItem, 1);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
