import {Routes} from express
import cTask from '../controllers/cTask.js'

const routes = Routes();

routes.get('/home', cTask.getAll());

export default routes;