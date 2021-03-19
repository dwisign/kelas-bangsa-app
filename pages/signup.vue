<template>

    <b-container>
        <h5 class="text-center"><b>SIGN UP</b></h5>
        <form>
            <div class="mb-3 mt-5">
                <label for="email-address" class="form-label">Nama lengkap</label>
                <input type="email" class="form-control" id="email-address">
            </div>
            <div class="mb-3">
                <label for="email-address" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email-address">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password">
            </div>
            <div class="mb-3">
                <label for="retype-password" class="form-label">Retype Password</label>
                <input type="password" class="form-control" id="retype-password">
            </div>
            <div class="mb-5 mt-5">
                <NuxtLink to="/signin"><b-button pill variant="primary btn-block">Submit</b-button></NuxtLink>
            </div>
        </form>
        <div class="mb-3">
            <p class="text-center">
                <NuxtLink to="/signin">Sign In</NuxtLink> | <NuxtLink to="/forgot-password">Forgot Password</NuxtLink>
            </p>
        </div>
    </b-container>

</template>

<script>
export default {
  layout: 'user-access'
}
</script>
