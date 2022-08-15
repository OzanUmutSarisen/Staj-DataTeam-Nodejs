<template>
    <PostForm :blog="blog" :submitForm="createPost" />
</template>

<script>
import PostForm from "../components/PostForm.vue";
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
export default {
    components: {
        PostForm,
    },
    setup(){
        const API_URL = 'http://localhost:3000/mongoDB';//our main port in back end
        const router = useRouter()//roter function for push

        const blog = reactive({//reactive data we store taken data from PostForm.vue (path is create) 
            title:'',
            short:'',
            long:''
        })

        async function createPost(){//create post function its job is take data and send data to /add page
            const response = await fetch(API_URL+"/add", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',//our receiver can understand it is a json data from there
                },
                body: JSON.stringify({//string data
                    title: blog.title,
                    short: blog.short,
                    long: blog.long
                })
            })
            const json = await response.json()
            router.push({
                name: 'home'//go to main page we use its name
            })
        }

        return{
            blog,// for use blog
            createPost,// for use createPost funtion
        }     
    },
};
</script>

<style></style>