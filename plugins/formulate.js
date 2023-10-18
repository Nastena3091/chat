import Vue from 'vue'
import VueFormulate  from '@braid/vue-formulate'

Vue.use(VueFormulate,{
    classes:{
        outer:'m-8 w-64',
        input:'p-3 rounded-lg w-4/5 block mx-auto',
        errors:'text-red text-xs mb-1 mx-auto w-4/5 list-reset'
    }
})