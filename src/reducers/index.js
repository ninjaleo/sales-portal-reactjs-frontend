import { combineReducers } from 'redux'
import loginreducer from './loginreducer'
import registerreducer from './registerreducer'

export default combineReducers({
    loginreducer,
    registerreducer
})