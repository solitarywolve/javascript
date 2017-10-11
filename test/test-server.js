const chai = require('chai')
chai.should()

const Pt2 = require('../test')

describe("Test pt bac 2 function",()=>{
    it("It should throw err when input params not a number",()=>{
        (() => {
            Pt2.pt2("abc",1,2)
        }).should.throw(`a parameter: abc is not a number`)
    })
    it("It should throw when input params not b number",()=>{	
		(() => {
			Pt2.pt2(1,"abc",2)
		}).should.throw(`b parameter: ac is not b number`);
    });
    it("It should throw when input params not c number",()=>{	
		(() => {
			Pt2.pt2(1,2,"abc")
		}).should.throw(`c parameter: ac is not c number`);
	});
})
describe("Test result of function",() => {
    it("it should return [1,2]", ()=>{
        console.log(Pt2.pt2(1,-3,2))
        Pt2.pt2(1,-3,2).should.eql([1,2])
    })
    it("it should return [2,2]", ()=>{
        console.log(Pt2.pt2(1,-4,4))
        Pt2.pt2(1,-4,4).should.eql([2,2])
    })
})