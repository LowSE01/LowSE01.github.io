const {createApp} = Vue

import Profile from './profile.js'
import Skills from './skills.js'
import Contact from './contact.js'

createApp(Profile).mount('#profile')
createApp(Skills).mount('#skills')
createApp(Contact).mount('#contact')
