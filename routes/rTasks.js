import {Routes} from express
import cTasks from '../controllers/cTasks.js'

const routes = Routes();

app.use('/home', cTasks.getAll());