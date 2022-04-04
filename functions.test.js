const {
    returnTwo,
    greeting,
    add
} = require('./functions')

describe(`returnTwo tests`, () => {

    test(`returnTwo returns the number 2 as an integer`, () => {
        let returningTwo = returnTwo()
        expect(returningTwo).toEqual(2)
    })

})

describe(`greeting tests`, () => {

    test(`greeting returns Hello James`, () => {
        let greetingJames = greeting('James')
        expect(greetingJames).toEqual('Hello, James.')
    })

    test(`greeting returns Hello Jill.`, () => {
        let greetingJill = greeting('Jill')
        expect(greetingJill).toEqual('Hello, Jill.')
    })

})

describe(`add tests`, () => {

    test(`add 1 and 2`, () =>{
        let add1 = add(1, 2)
        expect(add1).toEqual(3)
    })

    test(`add 5 and 9`, () =>{
        let add2 = add(5, 9)
        expect(add2).toEqual(14)
    })

})