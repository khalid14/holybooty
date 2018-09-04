
import _ from 'lodash';

import Vue from 'vue';

import VueRouter from 'vue-router';

import Vuetify from 'vuetify';

import j from "jquery";

import axios from 'axios';


window._ = _;

window.$ = j;

window.Vue = Vue;

Vue.use(VueRouter);

// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
    theme: {
        primary: "#f18163",
        secondary: "#e57373",
        accent: "#9c27b0",
        error: "#f44336",
        warning: "#ffeb3b",
        info: "#2196f3",
        success: "#4caf50",
        ideaCore: "689f38",
        fbColor: "#3b579d",
        greyText: '#4b4b4b'
      }
})


/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = axios;

