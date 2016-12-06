var count = require('./count.js');
var expect = require('chai').expect;
var request = require('superagent');
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
describe("异步测试套件",function(){
	it('异步请求应该返回一个对象', function(done){
	  request
	    .get('https://api.github.com')
	    .end(function(err, res){
	      expect(res).to.be.an('object');
	      done();
	    });
	});
})
