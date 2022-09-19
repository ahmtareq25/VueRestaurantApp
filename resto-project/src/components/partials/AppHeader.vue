<template>
  <div class="navigation-bar">


    <div id="navigation-container">

      <!-- <img src="https://i.imgur.com/hCrQkJi.png"> -->
      <AppLogo LogoWidth="80" LogoHeight="80" />

      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/">Add Restaurant</router-link></li>
        <li><router-link to="/">Update Restaurant</router-link></li>
        <li><a @click="logout" href="#">Logout</a></li>
      </ul>
    </div>
  </div>
</template>


<script>
  import AppLogo from './AppLogo.vue'
export default {
  name: 'AppHeader',
  components:{
    AppLogo
  },
  methods: {
    logout() {
      localStorage.clear();
      this.rredirectToLogin();

    },
    rredirectToLogin() {
      this.$router.push({
        name: 'AppLogin'
      })
    }
  }
}
</script>


<style>
.logo {
  float: left;
}

/* ~~ Top Navigation Bar ~~ */

#navigation-container {
  width: 1200px;
  margin: 0 auto;
  height: 70px;
}

.navigation-bar {
  background-color: #e3e3e3;
  height: 70px;
  width: 100%;
  text-align: center;
}

.navigation-bar img {
  float: left;
}

.navigation-bar ul {
  padding: 0px;
  margin: 0px;
  text-align: center;
  display: inline-block;
  vertical-align: top;
}

.navigation-bar li {
  list-style-type: none;
  padding: 0px;
  height: 24px;
  margin-top: 4px;
  margin-bottom: 4px;
  display: inline;
}

.navigation-bar li a {
  color: black;
  font-size: 16px;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  text-decoration: none;
  line-height: 70px;
  padding: 5px 15px;
  opacity: 0.7;
}

#menu {
  float: right;
}
</style>