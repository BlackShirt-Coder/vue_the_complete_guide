const app=Vue.createApp({
  data(){
    return {
      counter:0,
      name:'',
      secondName:'',
      confirm_name:'',
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
    },
     confirmName(){
     
      this.confirmName=this.name;
     }
  }
});
app.mount('#events');