<template>
    <div>
        <div class='form-header'>
            <h4>Register</h4>
        </div>
        <div class='form-body'>
            <form @submit.prevent="register">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4">
                </div>
                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>  
        </div>
  
    </div>
</template>