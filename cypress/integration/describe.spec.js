/// <reference types="cypress" />


it('a external test...', () => {

})


describe('Should group tests...', () => {
    describe('Should group more specific tests...', () => {
        it.skip('a internal test...', () => {

        })
    })

    describe('Should group more specific tests...', () => {
        it('a internal test...', () => {

        })
    })


    it('a internal test...', () => {

    })
})