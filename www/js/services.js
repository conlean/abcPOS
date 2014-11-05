angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Pos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pos = [
    { id: 0, name: 'Scruff McGruff', address: '', lat: '', lng:'' },
    { id: 1, name: 'G.I. Joe', address: '', lat: '', lng:'' },
    { id: 2, name: 'Miss Frizzle', address: '', lat: '', lng:'' },
    { id: 3, name: 'Ash Ketchum', address: '', lat: '', lng:'' }
  ];

  return {
    all: function() {
      return pos;
    },
    get: function(id) {
      // Simple index lookup
      return pos[id];
    }
  }
});
