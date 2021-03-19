<template>

    <b-container>
        <h5 class="text-center"><b>FORGOT PASSWORD</b></h5>
        <p class="small text-center mt-3">Enter your email below and we will send you reset password link to your email</p>
        <form>
            <div class="mb-3 mt-5">
                <label for="email-address" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email-address">
            </div>
            <div class="mb-5 mt-4">
                <b-button pill variant="primary" class="btn-block">Submit</b-button>
            </div>
        </form>
        <div class="mb-3">
            <p class="text-center">
                <NuxtLink to="/signup">Sign Up</NuxtLink> | <NuxtLink to="/signin">Sign In</NuxtLink>
            </p>
        </div>
    </b-container>

</template>

<script>
export default {
  layout: 'user-access'
}
</script>
