const redux = require('redux')
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17
}

//2.reducer
const rootReducer = (state = initialState, action) => {

    // if(action.type === 'ADD_AGE'){
    //     return{
    //         ...state,
    //         age: state.age + 1
    //     }
    // }
    // if(action.type === 'CHANGE_VALUE'){
    //     return{
    //         ...state,
    //         value: state.value + action.newValue
    //     }
    // }
    // return state
    switch (action.type) {
        case 'ADD_AGE':
            return{
                ...state, //di copy dulu state nya, agar value nya tidak tertimpa dan hilang
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return{
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state;
    }
}

//1.store
    // paremeter nya berupa function utk merubah nilai / state pada store sendiri
const store = createStore(rootReducer) //mrmanggil function reducer
console.log(store.getState())

//4.subsscription
    // parameter nya berupa function
store.subscribe(() => {
    console.log('store change', store.getState())
})

//3.dispatching action
    // wajib berupa object dan didalam nya ada type
store.dispatch({type:'ADD_AGE'}) // wajib huruf besar utk yg type
store.dispatch({type:'CHANGE_VALUE' , newValue: 12})
console.log(store.getState())
