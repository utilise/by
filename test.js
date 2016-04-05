var expect = require('chai').expect
  , by = require('./')

describe('by', function() {
  it('should filter list insensitively', function() {
    var a = [{val:'yes'}, {val:'YES'}, {val:'no'}]
    expect(a.filter(by('val', 'yes'))).to.eql([{val:'yes'}, {val:'YES'}])
  })

  it('should filter list with non-string', function() {
    var a = [{val:1}, {val:2}, {val:2}]
    expect(a.filter(by('val', 2))).to.eql([{val:2}, {val:2}])
  })

  it('should filter list with function predicate', function() {
    var a = [{val:1}, {val:2}, {val:3}]
      , fn = function(d){ return d > 1 }
    expect(a.filter(by('val', fn))).to.eql([{val:2}, {val:3}])
  })

  it('should filter by key only', function() {
    var a = [{val:'yes'}, {val:'YES'}, {}]
    expect(a.filter(by('val'))).to.eql([{val:'yes'}, {val:'YES'}])
  })

  it('should filter by undefined', function() {
    var a = [{val:'yes'}, {val:undefined}, {}]
    expect(a.filter(by('val', undefined))).to.eql([{val:undefined}, {}])
  })

  it('should allow function as key', function() {
    var a = [{val:'yes'}, {val:undefined}, {}]
      , val = function(d){ return d.val }
    expect(a.filter(by(val, 'yes'))).to.eql([{val:'yes'}])
  })

})