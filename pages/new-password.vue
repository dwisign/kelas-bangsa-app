<template>

    <b-container>
        <h5 class="text-center"><b>NEW PASSWORD</b></h5>
        <p class="small text-center mt-3">Enter your new password</p>
        <form>
            <div class="mb-3 mt-5">
                <label for="new-password" class="form-label">New Password</label>
                <input type="password" class="form-control" id="new-password">
            </div>
            <div class="mb-3">
                <label for="retype-new-password" class="form-label">Retype New Password</label>
                <input type="password" class="form-control" id="retype-new-password">
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
