markerList = [];
map = null;
function search(){
    var searchKeys = $("#search-input").val();
    if(searchKeys.replace(/\s/g,"") != "" && searchKeys.length>3){
        $.post("./php/search.php", {searchKeys: searchKeys}, function(data){
            var results = JSON.parse(data);

            console.log(results);
            clearMarkers();
            map.setCenter({lat: 40.6251991, lng: 14.3822897});
            $("#area-risultati").html("");
            map.setZoom(12);
            for(var i=0; i<results.length; i++){
                markerList.push(addResultToMap(parseFloat(results[i]["ar_latitudine"]), parseFloat(results[i]["ar_longitudine"]),results[i]["ar_titolo"]));
                $("#area-risultati").append(nuovoPannello(results[i]["ar_id"], results[i]["ar_titolo"], results[i]["ar_testoEdit"], results[i]["ar_commenti"], results[i]["ar_latitudine"], results[i]["ar_longitudine"]));
            }
        });
    }
}
function onmoduleload(){
    $("#search-input").keyup(search);
}

function initMap() {
  var center = {lat: 40.6251991, lng: 14.3822897};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: center
  });
}

function clearMarkers(){
    for(var i=0; i<markerList.length; i++){
            markerList[i].setMap(null);
    }

    markerList = [];
}

function addResultToMap(lat, lng, title){
    var marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        title: title,
        map: map
    });

    return marker;
}

function focusResult(lat, lng, title){
    clearMarkers();
    markerList.push(addResultToMap(lat, lng, title.replace(/#/g, "'")));
    map.setCenter({lat: lat, lng:lng});
    map.setZoom(15);
}

function setGoogle(){
  map.overlayMapTypes.clear();
}


function setCai(){
  var bounds = {
                    11: [[1104,1107],[769,771]],
                    12: [[2209,2215],[1539,1542]],
                    13: [[4420,4430],[3078,3085]],
                    14: [[8838,8861],[6157,6170]],
                    15: [[17682,17723],[12315,12341]],
                    16: [[35371,35447],[24631,24683]]
                    };

    var moonMapType  = new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {

        if (zoom < 11 || zoom > 16 ||
            bounds[zoom][0][0] > coord.x || coord.x > bounds[zoom][0][1] ||
            bounds[zoom][1][0] > coord.y || coord.y > bounds[zoom][1][1]) {
          return null;
        }
        return ['./src/mappe/cai/Z', zoom, '/', coord.y, '/', coord.x, '.jpg'].join('');

      },
      tileSize: new google.maps.Size(256, 256),
      name: 'Moon'
});
map.overlayMapTypes.clear();
map.overlayMapTypes.push(moonMapType);
}

function setProm(){
  var mapBounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(40.55564674, 14.30668947),
          new google.maps.LatLng(40.64726233, 14.39310681));
      var mapMinZoom = 11;
      var mapMaxZoom = 15;
      var opts = {
        streetViewControl: false,
        tilt: 0,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: new google.maps.LatLng(0,0),
        zoom: mapMinZoom
      }

     var imageMapType = new google.maps.ImageMapType({
              getTileUrl: function(coord, zoom) {
                var proj = map.getProjection();
                var z2 = Math.pow(2, zoom);
                var tileXSize = 256 / z2;
                var tileYSize = 256 / z2;
                var tileBounds = new google.maps.LatLngBounds(
                  proj.fromPointToLatLng(new google.maps.Point(coord.x * tileXSize, (coord.y + 1) * tileYSize)),
                  proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * tileXSize, coord.y * tileYSize))
                );
                if (!mapBounds.intersects(tileBounds) || zoom < mapMinZoom || zoom > mapMaxZoom) return null;
                return "./src/mappe/prom/{z}/{x}/{y}.png".replace('{z}',zoom).replace('{x}',coord.x).replace('{y}',coord.y);
              },
              tileSize: new google.maps.Size(256, 256),
              minZoom: mapMinZoom,
              maxZoom: mapMaxZoom,
              name: 'Tiles'
          });
          map.overlayMapTypes.clear();
          map.overlayMapTypes.push(imageMapType);
}

function nuovoPannello(key,titolo,testo,commenti,latitudine,longitudine){
    return '<div class="card mb-3">'+
           '    <div class="card-header">'+
           '        <h4 class="panel-title">'+
           '            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+key+'" aria-expanded="false" aria-controls="collapse'+key+'">'+
           '                '+titolo+
           '            </a>'+
           '        </h4>'+
           '    </div>'+
           '    <div id="collapse'+key+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">'+
           '        <div class="panel-body">'+
           '            <div class="testo">'+testo+'</div>'+
           '            <div class="commenti"><div class="titComm">Commenti</div>'+commenti+'</div>'+
           '            <div class="titPos"><a target="_blank" href="http://maps.google.com/maps?q=loc:'+latitudine+'+'+longitudine+'">Posizione: '+latitudine+'+'+longitudine+'</a></div>'+
           '            <button onclick=\'focusResult('+parseFloat(latitudine)+','+parseFloat(longitudine)+',"'+titolo.replace(/\'/g,"#")+'");\'>Guarda sulla mappa</button>'+
           '        </div>'+
           '    </div>'+
           '</div>';
}

/*
$(document).ready(function(){
    $('#cerca').click(function(){
        $('#result-area > div').unbind().html('');
        $.post('./index.php?pag=articoli&action=search',{'testo':$('#textSearch').val()})
            .done(function(dati){
                $.each(dati,function(key,value){
                    $('#result-area > div').append(nuovoPannello(key,value['t'],value['s'],value['c'],value['x'],value['y']));
                })
                $('#result-area > div tag').click(function(){openTag(this)});
            })
    });
});

openTag = function(questo){
    $.post('./index.php?pag=wiki&action=getId&id='+$(questo).attr('id'))
        .done(function(dati){
            $('#modalAlert .mod_titolo').html(dati['ar_titolo']);
            $('#modalAlert .mod_tag').html('Tag: '+dati['ar_tag']);
            $('#modalAlert .mod_articolo').html(dati['ar_testoShow']);
            $('#modalAlert .mod_posizione').html('<a target="_blank" href="http://maps.google.com/maps?q=loc:'+dati['ar_latitudine']+'+'+dati['ar_longitudine']+'">Posizione: '+dati['ar_latitudine']+'+'+dati['ar_longitudine']+'</a>');
            $('#modalAlert .mod_commenti').html('Commenti:<br/>'+dati['ar_commenti']);
            $('#modalAlert .mod_editore').html('Editore: '+dati['ar_editore']);
            addModal();
            $('.sfondo-nero').click(function(){removeModal();});
            $('.btn-cancel').click(function(){removeModal();});
        });
}

addModal = function(){
    $('.sfondo-nero').removeClass('input-nascosto');
    $('body').addClass('modal-open');
    $('.modal-select').addClass('in');
    open = true;
}
removeModal = function(){
    $('.sfondo-nero').addClass('input-nascosto');
    $('body').removeClass('modal-open');
    $('.modal-select').removeClass('in');
    $('.modal-select *').unbind();
    open = false;
}
*/
