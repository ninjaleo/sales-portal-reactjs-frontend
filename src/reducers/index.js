import { combineReducers } from 'redux'
import {loginreducer} from './loginreducer'
import registerreducer from './registerreducer'
import portalreducer from './portalreducer'

export default combineReducers({
    loginreducer,
    registerreducer,
    portalreducer
})