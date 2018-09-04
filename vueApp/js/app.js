
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import router from './routes';
Vue.component('app-header', require("./components/header.vue"));

const gdpr = new Vue({
    el: '.pit',
    data: {
        pageTitle: 'Home'
    },
    router: router,
    methods: {
        redirect(target){

        }
    },
    watch: {
        '$route'(to, from) {
            // ---- another place to watch router redirect
            /*console.info('from = ', from);
            console.info('to = ', to);*/
        }
    }
});

// ----- axios CSRF interceptor
axios.interceptors.response.use(function success(response){
    return response;
}, function failure(error) {
    // ------ if request expired, update CSRF
    if(error.response.data.status == 'expired') {
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = error.response.data.token;
        delete error.response.data.token;
    }

    return Promise.reject(error);


});
