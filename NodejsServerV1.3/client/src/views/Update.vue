<template>
    <post-form :blog="blog" :submitForm="updatePost"></post-form>
</template>

<script>
import PostForm from '../components/PostForm.vue';
import { useRouter, useRoute} from 'vue-router'
import { ref, onMounted } from 'vue'
export default {
    components:{
        PostForm,
    },
    setup(){
        const router = useRouter()
        const route = useRoute()

        const API_URL = 'http://localhost:3000/mongoDB'; 

        const blog = ref({
            title:"",
            short:"",
            long:"",
        })

        onMounted(() => {
            getPost()
        })

        async function getPost(){
            console.log("here")
            const { id } = route.params//take id from url
            const respons = await fetch(API_URL + "/getOne/" + id)
            const json = await respons.json()
            blog.value=json
        }

        async function updatePost(){
            const { id } = route.params
            const respons = await fetch(API_URL + "/update/" + id, {
                method:"PUT",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({//string data
                    title: blog.value.title,// new value send
                    short: blog.value.short,
                    long: blog.value.long
                })
            })
            const json = await respons.json()
            router.push({
                name:"home",
            })
        }

        return{
            blog,//old value
            updatePost,//update button 
        }
    },
};
</script>

<style lang="scss" scoped>

</style>