const app=Vue.createApp({
  data(){
    return {
      counter:0,
      name:'',
      secondName:''
    }
  },
  methods:{
    add(num){
      this.counter=this.counter+num;
    },
    reduce(num){
      this.counter=this.counter-num;
    },
    setName(e,lastName){
      this.name=e.target.value+" "+lastName;
    }
  }
});
app.mount('#events');