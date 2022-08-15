<template>
    <div class="container">
        <div v-for="blog in blogs" :key="blog._id" class="card my-5">
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{blog.title}}</p>
                    </div>
                </div>
                <div class="content">
                    {{blog.long}}
                    <p/>
                    <strong>short = {{blog.short}} </strong>
                </div>
            </div>
            <div class="card">
                <footer class="card-footer">
                    <button @click="editPost(blog._id)" class="card-footer-item button is-warning">Edit</button>
                    <button @click="removePost(blog._id)" class="card-footer-item button is-danger" >Delete</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    export default{
        setup() {
            const router = useRouter()
            const blogs = ref([]);//a emty array
            const API_URL = 'http://localhost:3000/mongoDB';//main path

            onMounted(()=>{//start with function
                getPosts();
            })

            async function getPosts(){
                try{
                    const response = await fetch(API_URL+"/getAll");//its a get method we may not define that
                    const json = await response.json()
                    blogs.value = json
                }catch(error){
                    console.log("Error" + error)
                }
            }

            async function removePost(_id){
                const response = await fetch(API_URL+"/delete/"+_id,{//we take id and delete that blog
                    method: 'DELETE'
                })
                getPosts()
            }

            async function editPost(_id){
                    router.push({
                        name:"Update",
                        params:{
                            id:_id,
                        },
                    })
            }

            return{
                blogs,//to use blog
                removePost,// to use removePost function
                editPost,
            }
        },
    }
</script>

<style></style>