<template>
    <div>
        <div class='form-header'>
            <h4>Login</h4>
        </div>
        <div class='form-body'>
            <form @submit.prevent="login">
                <div class="form-group col-md-6">
                    <label for="inputUsername">Username</label>
                    <input type="text" class="form-control" id="inputUsername">
                </div>
                <div class="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" class="form-control" id="inputPassword">
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>  
        </div>
  
    </div>
</template>