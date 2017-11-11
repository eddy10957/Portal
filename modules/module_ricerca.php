<script src="./js/ricerca/ricerca.js"></script>
<ol class="breadcrumb">
            <h2>Ricerca nell'archivio</h2>
</ol>

<div class="card mb-3">
   <div class="card-header"></div>
   <div class="card-body">
       <div class="row" style="margin-bottom: 50px;">
           <div class="col-sm-12">
            <div class="input-group">
               <input id="search-input" class="form-control" type="text" placeholder="Cerca...">
               <span class="input-group-btn">
                 <button class="btn btn-primary" type="button">
                   <i class="fa fa-search"></i>
                 </button>
               </span>
             </div>
           </div>
       </div>
       <div class="row">
           <div class="col-sm-6">
               <div class="card mb-3">
                   <div class="card-header">
                       <i class="fa fa-search"></i>
                       Risultati ricerca
                   </div>
                   <div id="area-risultati" class="card-body" style="height: 500px; overflow-y: scroll;"></div>
               </div>
           </div>
           <div class="col-sm-6">
               <div class="card mb-3">
                   <div class="card-header">
                       <i class="fa fa-map"></i>
                       Mappa
                   </div>
                   <div class="card-body">
                        <button onclick="setGoogle();">Google</button>
                        <button onclick="setCai();">Cai</button>
                        <button onclick="setProm();">Promontorium</button>
                        <style>
                           #map {
                            height: 450px;
                            width: 100%;
                           }
                        </style>
                        <div id="map"></div>
                        <script async defer
                        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAMM9DFOYY_IgB0ghASIgcJFr2u2mblt8&callback=initMap">
                        </script>

                   </div>
               </div>
           </div>
       </div>
   </div>
</div>
