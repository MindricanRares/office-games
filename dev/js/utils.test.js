import {expect} from 'chai';
import {createDate} from './utils';

describe('createDate()',()=>{
    it('should return corect date when value is corect',()=>{
      const corectDate=new Date();
      const correctInput=(`${corectDate.getHours()}:${corectDate.getMinutes()<10?'0':''}${corectDate.getMinutes()}`);

      expect(1).to.equal(getMinutesBetweenDates(corectDate,createDate(correctInput)));
    });

    it('should throw error when value is incorrect1',()=>{
      expect(function () {  createDate("10:2a")} ).to.throw("Invalid number format");
    })

    it('should throw error when value is incorrect2',()=>{
      expect(function () {  createDate("10;22")} ).to.throw("Invalid number format");
    })

    it('should throw error when value is incorrect3',()=>{
      expect(function () {  createDate("20:2")} ).to.throw("Invalid number format");
    })


  })

function getMinutesBetweenDates(start_date, end_date) {
  var date1 = new Date(start_date);
  var date2 = new Date(end_date);
  var timeDiff = (Math.abs((date2.getTime() - date1.getTime()) / 1000 / 60));
  return  Math.round((timeDiff / 1000) / 60)
}
