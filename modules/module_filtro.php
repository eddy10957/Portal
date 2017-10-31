<div class="card mb-3">
   <div class="card-header">
      <i class="fa fa-table"></i> Filtro interattivo
   </div>
   <div class="card-body">
      <div class="table-responsive">
         <div id="dataTable_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4">
            <div class="row">
            <style>
                 table {
                 font-family: arial, sans-serif;
                 border-collapse: collapse;
                 width: 100%;
                 }

                 td, th {
                     border: 1px solid #F5F5F5;
                     text-align: left;
                     padding:10px;
                 }

                 tr:hover{
                     background-color: #eeeeee;
                     cursor: pointer;
                 }
                 tr:active{
                     background-color: #
                 }

                 .lv-01{
                     display: none;
                 }

                 .lv-02{
                     display: none;
                 }
             </style>
             <script>
                function onmoduleload(){

                    $("#filtro-testuale-btn").click(function(){
                        $("#filtro-descrizione").html("Si definisce indizio di tipo testuale ecc..");
                        $(".lv-01").hide();
                        $(".lv-02").hide();
                        $("#filtro-testuale").show();

                    });

                    $("#filtro-grafico-btn").click(function(){
                        $("#filtro-descrizione").html("Si definisce indizio di tipo grafico ecc..");
                        $(".lv-01").hide();
                        $(".lv-02").hide();
                        $("#filtro-grafico").show();
                    });

                    $("#filtro-numerico-btn").click(function(){
                        $("#filtro-descrizione").html("Si definisce indizio di tipo numerico ecc..");
                        $(".lv-01").hide();
                        $(".lv-02").hide();
                        $("#filtro-numerico").show();
                    });

                    $("#filtro-gioco-btn").click(function(){
                        $("#filtro-descrizione").html("Si definisce indizio di tipo gioco ecc..");
                        $(".lv-01").hide();
                        $(".lv-02").hide();
                        $("#filtro-gioco").show();
                    });
                }
             </script>
               <div class="col-sm-3">
                   <table>
                       <tbody>
                       <tr id="filtro-testuale-btn">
                           <th>Testuale</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr id="filtro-grafico-btn">
                           <th>Grafico</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr id="filtro-numerico-btn">
                           <th>Numerico</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr id="filtro-gioco-btn">
                           <th>Gioco</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tbody>
                   </table>
               </div>
               <div id="filtro-testuale" class="col-sm-3 lv-01">
                   <table>
                       <tbody>
                       <tr>
                           <th>Libro chiave</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Fatto storico</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Linguistico</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Google</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Cifrario</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Data persona</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Anagramma</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Tecnico</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Sinonimi</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Giochi grammaticali</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Grafico</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Analisi testo</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Gioco di parole</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Letterario</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Modifiche nascoste</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Relazionale</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Associativo</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>

                       <tbody>
                   </table>
                   </div>
                   <div id="filtro-grafico" class="col-sm-3 lv-01">
                       <table>
                           <tbody>
                           <tr>
                               <th>Rebus</th>
                               <th><i class="fa fa-fw fa-angle-right"></i></th>
                           </tr>
                           <tr>
                               <th>Sintesi grafica</th>
                               <th><i class="fa fa-fw fa-angle-right"></i></th>
                           </tr>
                           <tr>
                               <th>Associativo</th>
                               <th><i class="fa fa-fw fa-angle-right"></i></th>
                           </tr>
                           <tr>
                               <th>Gioco di parole</th>
                               <th><i class="fa fa-fw fa-angle-right"></i></th>
                           </tr>
                           <tr>
                               <th>Tecnico</th>
                               <th><i class="fa fa-fw fa-angle-right"></i></th>
                           </tr>
                           <tr>
                               <th>Fatto storico</th>
                               <th><i class="fa fa-fw fa-angle-right"></i></th>
                           </tr>
                           <tr>
                               <th>Conoscena dipinto</th>
                               <th><i class="fa fa-fw fa-angle-right"></i></th>
                           </tr>
                           <tr>
                               <th>Elaborazione grafica</th>
                               <th><i class="fa fa-fw fa-angle-right"></i></th>
                           </tr>
                           <tr>
                               <th>Elemento nascosto</th>
                               <th><i class="fa fa-fw fa-angle-right"></i></th>
                           </tr>
                           <tr>
                               <th>Codice grafico</th>
                               <th><i class="fa fa-fw fa-angle-right"></i></th>
                           </tr>
                           <tr>
                               <th>Cose modificate</th>
                               <th><i class="fa fa-fw fa-angle-right"></i></th>
                           </tr>
                           <tbody>
                       </table>
               </div>
               <div id="filtro-numerico" class="col-sm-3 lv-01">
                   <table>
                       <tbody>
                       <tr>
                           <th>Plot</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Costante</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Cifrario</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Tecnico</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Coordinate</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tr>
                           <th>Associativo</th>
                           <th><i class="fa fa-fw fa-angle-right"></i></th>
                       </tr>
                       <tbody>
                   </table>
                </div>
                <div id="filtro-gioco" class="col-sm-3 lv-01">
                    <table>
                        <tbody>
                        <tr>
                            <th>Risoluzione</th>
                            <th><i class="fa fa-fw fa-angle-right"></i></th>
                        </tr>
                        <tr>
                            <th>Gioco di parole</th>
                            <th><i class="fa fa-fw fa-angle-right"></i></th>
                        </tr>
                        <tr>
                            <th>Cirfario</th>
                            <th><i class="fa fa-fw fa-angle-right"></i></th>
                        </tr>
                        <tr>
                            <th>Anagramma</th>
                            <th><i class="fa fa-fw fa-angle-right"></i></th>
                        </tr>
                        <tr>
                            <th>Tecnico</th>
                            <th><i class="fa fa-fw fa-angle-right"></i></th>
                        </tr>
                        <tr>
                            <th>Sovrapposizione</th>
                            <th><i class="fa fa-fw fa-angle-right"></i></th>
                        </tr>
                        <tbody>
                    </table>
            </div>
            <div class="card sm-3">
               <div class="card-header">
                  Descrizione
               </div>
            <div id="filtro-descrizione" class="card-body" style="height: 100%;"></div>
            </div>
            </div>
         </div>
      </div>
   </div>
</div>
