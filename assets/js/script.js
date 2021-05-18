const app = new Vue({
  el: '#root',
  data: {

    mails:[],
    caricamento: true

  },
  created(){

  },
  mounted(){

    this.chiamata('https://flynn.boolean.careers/exercises/api/random/mail')
    
  },
  methods: {

    chiamata(url){
      axios.get(url)
      .then((res) => {
        this.mails.push(res.data.response)
        if(this.mails.length < 10){
          this.chiamata(url)
        }
      })
      .catch((error) => {
        console.log(error);
      })
    } 

  }

});