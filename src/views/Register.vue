<template>
    <div class="container mt-5">
        <div class='form-header'>
            <h4>Register</h4>
        </div>
        <div class='form-body mt-5'>
            <form @submit.prevent="register">
                <div class="form-group">
                    <label for="inputUsername">Username</label>
                    <input type="text" class="form-control" id="inputUsername">
                </div>
                <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" id="inputEmail">
                </div>
                <div class="form-group">
                    <label for="inputFirstname">FirstName</label>
                    <input type="text" class="form-control" id="inputFirstname">
                </div>
                <div class="form-group">
                    <label for="inputLastname">LastName</label>
                    <input type="text" class="form-control" id="inputLastname">
                </div>
                <div class="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" class="form-control" id="inputPassword">
                </div>
                <div class="form-group">
                    <label for="inputPassword2">Password Confirm</label>
                    <input type="password" class="form-control" id="inputPassword2">
                </div>
                <div class="mt-5">
                    <button type="submit" class="btn btn-primary btn-lg p-2">Sign up</button>
                </div>
            </form>  
        </div>
  
    </div>
</template>