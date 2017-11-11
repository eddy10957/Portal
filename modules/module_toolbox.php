<script src="./js/toolbox/CRSconst.js"></script>
<script src="./js/toolbox/CRStoolbox.js"></script>
<script src="./js/toolbox/CRSinterface.js"></script>

<style>
    .tool-bar{
        border-right: 1px solid #e1e1e1;
    }

    .tool{
        display: none;
    }
</style>
<ol class="breadcrumb">
            <h2>Toolbox</h2>
</ol>
<div class="card mb-3">
   <div class="card-header"></div>
   <div class="card-body">
       <div class="row">
           <!-- Navigation -->
           <div class="col-sm-2">
               <ul class="navbar-nav navbar-sidenav  tool-bar" id="exampleAccordion">
                   <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Menu Levels">
                     <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti" data-parent="#exampleAccordion">
                       <i class="fa fa-fw fa-sitemap"></i>
                       <span class="nav-link-text">Analisi testo</span>
                     </a>
                     <ul class="sidenav-second-level collapse" id="collapseMulti">
                       <li>
                         <a href="#" onclick="$('.tool').hide(); $('#tool-numtochar').show();">Da Numeri a Lettere</a>
                       </li>
                       <li>
                         <a href="#" onclick="$('.tool').hide(); $('#tool-cesare').show();">Cifrario Cesare</a>
                       </li>
                       <li>
                         <a href="#">Decodifica Base64</a>
                       </li>
                     </ul>
                   </li>
               </ul>
           </div>
           <div class="col-sm-10">

               <!-- Da Numeri a Lettere -->
               <!-- Tool-Start -->
               <div id="tool-numtochar" class="card mb-3 tool">
                   <div class="card-header">Da Numeri a Lettere</div>
                   <div class="card-body">
                       <textarea id="input-numtochar" style="resize: none;" rows="5" cols="80"></textarea><br><br>
                       <button id="button-numtochar" onclick="CRSinterface_numtochar();">Converti</button><br><br>
                       <textarea id="output-numtochar" style="resize: none;" rows="5" cols="80"></textarea>
                   </div>
               </div>
               <!-- Tool-End -->

               <!-- Cifrario Cesare -->
               <!-- Tool-Start -->
               <div id="tool-cesare" class="card mb-3 tool">
                   <div class="card-header">Cifrario Cesare</div>
                   <div class="card-body">
                       <textarea id="input-cesare" style="resize: none;" rows="5" cols="80"></textarea><br><br>
                       <button id="button-cesare">Converti</button><br><br>
                       <textarea id="output-cesare" style="resize: none;" rows="5" cols="80"></textarea>
                   </div>
               </div>
               <!-- Tool-End -->
           </div>
       </div>



       </div>
    </div>
</div>
