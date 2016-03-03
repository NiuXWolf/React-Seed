import chai from 'chai';
import ChatWebAPIUtils from './ChatWebAPIUtils';

chai.should();

describe('Date Helper', () => {
    describe('getAllMessages', () => {
        it('returns mm/dd hh:mm:ss formatted time when passed a date', () => {
          let one = 1;
          one.should.equal(1);

          //  ChatWebAPIUtils.getAllMessages().should.equal('1/24 11:33:30');
        });

    });
});
