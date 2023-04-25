const app=Vue.createApp({
  data(){
    return{
       boxASelected:false,
       boxBSelected:false,
       boxCSelected:false,
    }
  },
  methods:{
    showBox(box){
      if(box==='A'){
        this.boxASelected=!this.boxASelected;
      }
      if(box==='B'){
        this.boxBSelected=!this.boxBSelected;
      }
      if(box==='C'){
        this.boxCSelected=!this.boxCSelected;
      }
     
    }
  },
  computed:{
    showA(){
     return {active:this.boxASelected}
    },
    showB(){
      return{
        active:this.boxBSelected
      }
    },
    showC(){
      return{
        active:this.boxCSelected
      }
    }
  }
});
app.mount('#styling');