<script>
    function login(){
        var username = $("#username").val();
        var password = $("#password").val();

        $.post("./php/login.php", {username: username, password: password}, function(data){
            if(JSON.parse(data)){
                alert("Login effettuato con successo!");
                window.location.replace("index.php");
            }
            else{
                alert("Dati inseriti sbagliati...un corsaro sa sempre cosa scrivere");
            }
        });
    }
</script>
<div class="container">
  <div class="card card-login mx-auto mt-5">
    <div class="card-header">Login</div>
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input class="form-control" id="username" type="text" placeholder="Username">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input class="form-control" id="password" type="password" placeholder="Password">
        </div>
        </div>
        <a class="btn btn-primary btn-block" onclick="login();" style="cursor: pointer; color: white;">Login</a>
      </form>
    </div>
  </div>
</div>
