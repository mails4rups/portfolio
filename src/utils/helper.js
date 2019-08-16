import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';
Vue.use(VueToast);



export default function showToast(type,message){
    Vue.$toast.open({
        message: message,
        type: type,
        position: 'bottom-right'
    });
}