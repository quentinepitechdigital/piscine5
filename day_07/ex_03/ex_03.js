function map(elements, modifier) {
    let arr = [];

    for (element of elements) {
        arr.push(modifier(element));
    }
    return arr;
}