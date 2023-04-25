/*
const user_input = document.querySelector('.user_input');
const btn = document.querySelector('.add_btn');
btn.onclick = function () {
    const input = document.createElement('input');
    input.value = user_input.value;
    let classes = ['form-control', 'm-3'];
    input.classList.add(...classes);
    input.setAttribute('type', 'text');
    document.querySelector('.form-group').appendChild(input);
    user_input.value='';
}
;*/
// Let start using vue.js
// console.log(Vue);



const app=Vue.createApp({
    data(){
        return{
            enter_value:'',
            input_ary:[]
        }
    },
    methods: {
        get_all(){
               this.input_ary.push(this.enter_value);
                this.enter_value='';
        }
    },  
});
app.mount('#app')
