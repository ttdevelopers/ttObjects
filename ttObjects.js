ttObjects = {
  room : null,
  getRoom : function() {
    for (var memberName in turntable) {
      var member = turntable[memberName];
      if (member === null || typeof member !== 'object') continue;
      if (typeof member.setupRoom === 'object') {
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
      if (member === null || typeof member !== 'object') continue;
      if (typeof member.blackswan === 'object') {
        ttObjects.manager = member;
        return member;
      }
    }
    return false;
  }
};