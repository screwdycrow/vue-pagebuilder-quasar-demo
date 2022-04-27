import {boot} from 'quasar/wrappers'
import vuepagebuilder from "src/plugins/vuepagebuilder";

export default boot(({app,router,store})=>{
  app.use(vuepagebuilder,{router,store})
})
