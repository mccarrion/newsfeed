import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
    // TODO: Figure out actual API URL
    .get('api/')
    .then(response => (this.info = response))
  }
})
