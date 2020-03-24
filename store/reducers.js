import { combineReducers } from 'redux'

import count from './count/countSlice'

const reducers = combineReducers({ 
  count,
})

export default reducers;