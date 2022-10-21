const chai = require('chai');

/*
Chain keywords
---------------
to
be
been
is
that
which
and
has 
have
with
at
of 
same
but 
does
still
-----------------
*/

/* //*Chai Configurations
chai.config/includeStack 
 - set to true (false by default)

chai.config.showDiff
 - default true
chai.config.truncateThreshold
    - set to 0 to disable
*/

const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

//Expect Examples

let a = 1,
  b = 1;
expect(a).to.be.equals(b);

//object/string/boolean

const makeObject = () => {
  return {
    a: 100,
    b: 'hello',
  };
};

const x = makeObject();
const y = makeObject();

expect(x).to.be.an('object');
//need deep.equals for object comparisons
expect(x).to.be.deep.equals(y);

//chaining expressions
expect(x).to.be.an('object').and.to.be.deep.equals(y);

//arrays
let numbers = [1, 2, 3, 0];

expect(numbers).to.be.an.Arguments('array').that.includes(3);

//should()
//* should Extras
/*
should.exist
should.not.exist
should.equal
should.not.equal
should.Throw
should.not.Throw
*/

a.should.be.equals(b);
x.should.be.deep.equals(y);
x.should.be.an('object').and.to.be.deep.equal(y);
numbers.should.be.an('array').that.includes(3);

//Assert
//! cannot chain expressions with assert statements

assert.equal(a, b, 'failure message');
assert.deepEqual(x, y, 'failure message');
assert.isArray(numbers, 'failure message');
