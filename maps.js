function mapaInicio(){ 
  // Declaración de la función.
    var coord = {lat:-34.6004444,lng:-58.4021781}; 
    // Toma la latitud y longitud.
    var map = new google.maps.Map(document.getElementById('map'),{ 
      // Accede a la clase google maps, al metodo map y crea el mapa.
      zoom: 8, 
      // Toma un objeto (Cantidad de zoom).
      center: coord
    });
    var marker = new google.maps.Marker({ 
      // Accede a la clase google maps, al metodo map y genera el marcado en el mapa.
      position: coord, 
      // Toma un objeto.
      map: map
    });
}
