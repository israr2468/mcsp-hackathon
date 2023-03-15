import { describe, expect, test } from 'vitest';
import sum from 'app.js'

describe('Test case: adding two numbers', () => {
    test('sum', function () {
        expect(sum(1,1)).toEqual(2)
    })
})

// const { sum } = require('./app.js');
// console.log(sum(1, 2))

// to test this you need to open up the folder in terminal
// then type "npm run test" test being whatever the name of the test file is. 