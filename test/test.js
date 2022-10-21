const chai = require('chai');
const should = chai.should();

// chai.config.truncateThreshold = 0;

// chai.config.showDiff = false; // turn off reporter diff display
// chai.config.truncateThreshold = 0; // disable truncating
// chai.config.includeStack = true; // turn on stack trace

describe("objects", () => {
    it("should equal", () => {
        const a = {
            a: 1,
            b: 2,
            c: {
                a: 1,
                b: 2,
                c: {
                    a: 1,
                    b: 2,
                    x: 3
                }
            }
        };

        const b = {
            a: 1,
            b: 2,
            c: {
                a: 1,
                b: 2,
                c: {
                    a: 1,
                    b: 2,
                    x: 4
                }
            }
        };
        a.should.deep.equal(b);
    });
});