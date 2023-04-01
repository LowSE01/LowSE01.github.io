const {createApp} = Vue

import Profile from './profile.js'
import Skills from './skills.js'
// import Works from './works.js'
import Events from './events.js'
import Contact from './contact.js'

createApp(Profile).mount('#profile')
createApp(Skills).mount('#skills')
// createApp(Works).mount('#works')
createApp(Events).mount('#events')
createApp(Contact).mount('#contact')
