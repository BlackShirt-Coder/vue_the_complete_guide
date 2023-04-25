const app=Vue.createApp({
  data(){
    return {
      counter:0,
      name:'',
      secondName:'',
      confirm_name:'',
      full_name:''
    }
  },
  watch:{
    counter(){
      if(this.counter > 50){
        setTimeout(() => {
          this.counter=0;
        }, 1000);
      }
    },
    name(value){
      this.full_name=value;
    },
    secondName(value){
       this.full_name=this.name+ value;
    }
   
  }
  ,
  methods:{
    add(num){
      this.counter=this.counter+num;
    },
    reduce(num){
      this.counter=this.counter-num;
    },
    setName(e){
      this.name=e.target.value;
    },
     confirmName(){
     
      this.confirmName=this.name;
     },
     clear(){
      this.name='';
      this.secondName='';
     }
  }
});
app.mount('#events');