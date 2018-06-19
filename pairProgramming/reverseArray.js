reverseArray = (arr) => {
    let r1 = 0
    let r2 = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[arr.length - (i + 1)]) {
            return arr
        } else if (arr[i] === arr[(arr.length / 2) - 1]) {
            r1 = arr[i]
            r2 = arr[arr.length - (i + 1)]
            arr[i] = r2
            arr[arr.length - (i + 1)] = r1
            return arr
        } else {
            r1 = arr[i]
            r2 = arr[arr.length - (i + 1)]
            arr[i] = r2
            arr[arr.length - (i + 1)] = r1
        }
        console.log(arr[i])
    }
    return arr
}





const assert = require("assert")
describe("reverse array", () => {
    it("itterate through array and return array reversed", () => {
        let array = [1, 2, 3]
        assert.deepEqual(reverseArray(array), [3, 2, 1])
        assert.deepEqual(reverseArray([1, 2, 3, 4]), [4, 3, 2, 1])
    })
})