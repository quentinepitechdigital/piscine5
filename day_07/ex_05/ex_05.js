function findClosestResult(functionsObj, ine, out) {
    let test = [10000000, ""]
    for (let func in functionsObj) {
        test = Math.abs(out - functionsObj[func](ine)) < test[0] ? [Math.abs(out - functionsObj[func](ine)), func] : test
    }
    return test[1]
}
