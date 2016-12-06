var count = require('./count.js');
var expect = require('chai').expect;
describe("加法测试套件",function(){
	it("1 + 2 = 3",function(){
		expect(count.add(1,2)).to.be.equal(3);
	})
	
})
describe("乘法测试套件",function(){
	it("1 * 2 = 2",function(){
		expect(count.mulit(1,2)).to.be.equal(2);
	})
})