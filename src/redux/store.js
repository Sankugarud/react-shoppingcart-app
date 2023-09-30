import {createStore} from 'redux';
import Postreducer from './reducer/Postreducer';

const store = createStore(Postreducer);
export default store;