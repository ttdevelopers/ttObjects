(function() {

var ttObjects = {
  room : null,
  getRoom : function() {
    for (var memberName in turntable) {
      var member = turntable[memberName];
      if (typeof member !== 'object' || member === null) continue;
      if (typeof member.setupRoom !== 'undefined') {
        ttObjects.room = member;
        return member;
      }
    }
    return false;
  },

  manager : null,
  getManager : function() {
    for (var memberName in ttObjects.getRoom()) {
      var member = ttObjects.room[memberName];
      if (typeof member !== 'object' || member === null) continue;
      if (typeof member.blackswan !== 'undefined') {
        ttObjects.manager = member;
        return member;
      }
    }
    return false;
  },

  api : null,
  getApi: function () {
    var apiRegex = / Preparing message /i;
    for (var memberName in turntable) {
      var member = turntable[memberName];
      if (typeof member !== 'function') continue;
      if (apiRegex.test(Function.prototype.toString.apply(member))) {
        ttObjects.api = member;
        return member;
      }
    }
    return false;
  }
};

// export our object
if (typeof module === 'object' && exports in module)
	module.exports = ttObjects;
if (typeof window !== "undefined")
	window.ttObjects = ttObjects;

})();