<template>
    <div class="container">
        <form @submit.prevent="submitForm">
            <div class="field">
                <label class="label">Title</label>
                    <div class="control">
                        <input v-model="blog.title" class="input" type="text" placeholder="Title input">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Short</label>
                    <div class="control">
                        <input v-model="blog.short" class="input" type="text" placeholder="Short input">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Long</label>
                        <div class="control">
                            <input v-model="blog.long" class="input" type="text" placeholder="Long input">
                        </div>
                    </div>

                <div class="field is-grouped">
                        <div class="control">
                            <button type="submit" class="button is-primary">Submit</button>
                        </div>
                </div>
        </form>
    </div>
</template>

<script>
export default {
    props:['blog', 'submitForm'],//for use blog and submitForm
   
};
</script>

<style lang="scss" scoped>

</style>