<script setup>
/**user */
import Navbar from '../src/components/User/Layouts/Navbar.vue'
import Footer from '../src/components/User/Layouts/Footer.vue'
</script>

<template>
  <div id="app">
    <section v-if="token">
        admin dashboard
    </section>
    <section else>
      <Navbar/>
        <router-view/>
      <Footer/>
    </section>
   
  </div>
</template>

<script>
const token = localStorage.getItem('token')

if (token) {
  
}else{
  import("../src/components/User/Assets/style.css");
}


export default {
  name: "App",
  components: {

  },
};
</script>

