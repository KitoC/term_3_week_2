function multiplesOfThree(arr){
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] =  arr[i] * 3
    }
    return arr
}

const assert = require('assert')

describe('Multiple of threes', () => {
  it('Iterate through an array with each element being multiplied by three and returning the altered array.', () =>{
      assert.deepEqual(multiplesOfThree([1, 2, 3, 4, 5, 6, 7, 8, 9]), [3, 6, 9, 12, 15, 18, 21, 24, 27])
      assert.deepEqual(multiplesOfThree([6, 8, 9, 10, 12, 13, 18]), [18, 24, 27, 30, 36, 39, 54])
  })  
})