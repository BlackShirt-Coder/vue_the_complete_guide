const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enterValue: ''
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enterValue);
      this.enterValue = '';
    },
    removeGoal(idx){
      this.goals.splice(idx,1);
      // this.goals.splice(0);//all clear
    }
  },
  computed: {

  }
});
app.mount('#user-goals');

