<template>
  <div class="d-flex py-3 header-container d-flex justify-content-between" >
     <div class="logo">
          <img class="w-100" src="../assets/img/logo.jpg">
      </div>
       <div class="d-flex  align-items-center">
          <div class="me-3">
               <select class="form-control" v-model="selected" @change="onChange($event)">
                    <option value="vi">VN</option>
                    <option value="en">EN</option>
              </select>
          </div>
          <div class="me-3">
            <input
              @change="toggleTheme"
              id="checkbox"
              type="checkbox"
              class="switch-checkbox"
            />
            <label for="checkbox" class="switch-label">
              <span>🌙</span>
              <span>☀️</span>
              <div
                class="switch-toggle"
                :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
              ></div>
            </label>
          </div>
       </div>
  </div>
</template>
<script >
import i18n from "@/lang/i18n";
export default {
  data() {
    return {
      userTheme: "",
      locales:["vn","en"],
      selected:(localStorage.getItem('lang') || 'vn'),
    };
  },
  created(){
  this.userTheme = localStorage.getItem("user-theme") || "light-theme";
  },
  methods: {
  setTheme(theme) {
    localStorage.setItem("user-theme", theme);
    this.userTheme = theme;
    document.documentElement.className = theme;
  },toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)" ).matches;
        console.log(hasDarkPreference);
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
    //i18n
     onChange(event) {
            i18n.global.locale = event.target.value;
            localStorage.setItem('lang',event.target.value)
    }
    
  },
  mounted() {
   // const initUserTheme = this.getMediaPreference();
    this.setTheme(this.userTheme);
  }
  
  
};
</script>
<style>
@import '@/assets/custom.css'
</style>

