ttObjects = {
  room : null,
  getRoom : function() {
    for (var memberName in turntable) {
      var member = turntable[memberName];
      if (member === null || typeof member !== 'object') continue;
      if (member.hasOwnProperty('setupRoom')) {
        ttObjects.room = member;
        return member;
      }
    }
    return false;
  },

  manager : null,
  getManager : function() {
    for (var memberName in ttObjects.room) {
      var member = ttObjects.room[memberName];
      if (member === null || typeof member !== 'object') continue;
      if (member.hasOwnProperty('blackswan')) {
        ttObjects.manager = member;
        return member;
      }
    }
    return false;
  }
};