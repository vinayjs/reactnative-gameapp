import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from './reducer'

const store = configureStore(scoreReducer)

export default store