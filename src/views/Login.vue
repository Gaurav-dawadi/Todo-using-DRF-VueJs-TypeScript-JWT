<template>
    <div class="container mt-5">
        <div class='form-header'>
            <h4>Login</h4>
        </div>
        <div class='form-body mt-5'>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="inputUsername">Username</label>
                    <input type="text" class="form-control" id="inputUsername">
                </div>
                <div class="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" class="form-control" id="inputPassword">
                </div>
                <div class="mt-5">
                    <button type="submit" class="btn btn-primary btn-lg p-2">Login</button>
                </div>
            </form>  
        </div>
  
    </div>
</template>