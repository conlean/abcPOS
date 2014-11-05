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
})

/**
 * A simple example service that returns some data.
 */
.factory('News', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [
    { id: 0, name: 'Líquido de frenos', description:'Fluido especial para sistemas hidráulicos de frenos a disco y/o tambor de todo tipo de vehículo.', img:'img/liquido_frenos.png' },
    { id: 1, name: 'Lava parabrisas', description:'Producto concentrado, formulado con una delicada combinación de fragancias cítricas especialmente desarrolladas, ideal para eliminar suciedad y remover la grasitud del parabrisas.', img:'img/lavaparabrisas.png' },
    { id: 2, name: 'Lubricante', description:'Lubricante multipropósito en aerosol. El mismo tiene la propiedad de ser un poderoso anticorrosivo y la característica de favorecer el desplazamiento de agua en piezas y mecanismos que así lo requieran para evitar la acción de la humedad.', img:'img/limit_lubricante.png' },
    { id: 3, name: 'Elaion Moto 2T', description:'Lubricante semisintético especialmente desarrollado para motores de 2 tiempos de motocicletas.', img:'img/elaion_moto2T.png' },
    { id: 4, name: 'Renovador siliconas', description:'Producto utilizado para lubricar, proteger y aislar todo tipo de superficie, generando una capa protectora de larga duración para evitar el resecamiento de la misma', img:'img/renovador_siliconas.png' },  
  ];

  return {
    all: function() {
      return items;
    },
    get: function(id) {
      // Simple index lookup
      return items[id];
    }
  }
});

