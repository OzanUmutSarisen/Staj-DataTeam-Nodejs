import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";// use router
import 'bulma/css/bulma.css'; // use bulma.css for front end

createApp(App).use(router).mount("#app");
