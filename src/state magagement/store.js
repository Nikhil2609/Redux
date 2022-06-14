import { legacy_createStore as createStore} from 'redux'
import allReducer from './reducer'

// pass this global store to main app with in provider
const store = createStore(allReducer);
export default store;