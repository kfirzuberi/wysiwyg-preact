import createStore from "unistore";
import devtools from 'unistore/devtools'

const initialState = {
    wysiwygVisibility: true,
}

export default process.env.NODE_ENV === 'production' ? createStore(initialState) : devtools(createStore(initialState));