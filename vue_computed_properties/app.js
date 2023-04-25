const app=Vue.createApp({
  data(){
    return {
      counter:0,
      name:'',
      secondName:'',
      confirm_name:'',
    }
  },
  computed:{
     fullName(){
         if(this.name===''){
          return this.name='';
         }
         console.log('running');
         return  this.name+' (developer)';
     }
  },
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
     },
     showFullName(){
      if(this.name===''){
        return this.name='';
      }
     return this.name+' oo htut ';
     }
  }
});
app.mount('#events');