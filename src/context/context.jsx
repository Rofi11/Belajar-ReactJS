// refactoring state management Context-API agar lebih mudha dibaca nya
    // membuat High Order Component

import React, { Component,createContext } from 'react';

export const RootContext = createContext()

// High Order Component utk Provider
const Provider = RootContext.Provider
// buat stateless component
const GlobalProvider = (Children) => {
    return(
        // membaut statefull component , sangat memungkinkan => utk menyimpan Provider
        class ParentComp extends Component{
            state = { //global state
                totalOrder: 0
            }
            // membuat sebuah function utk dispatch kalo di redux
                // namanya bisa bebas, agar mudah di mengerti kia pakai dispatch saja, tapi penggunaan nya sama kaya dispatch
            dispatch = (action) => {
                if(action.type === 'PLUS_ORDER'){
                    return this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                }
                if(action.type === 'MINUS_ORDER' && this.state.totalOrder > 0){
                    return this.setState({
                        totalOrder: this.state.totalOrder - 1
                    })
                }
            }

            // children disini menjadi sebuah parameter jadi saat GlobalProvider di panggil maka menjadi parent , contoh kaya di home.jsx mejadi children
            render(){
                return(
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props}/>
                    </Provider>
                )
            }
        }
    )
}

export default GlobalProvider;

// High Order Component utk Consumer
const Consumer = RootContext.Consumer
// buat stateless component
export const GlobalConsumer = (Children) => {
    return(
        class ParentConsumer extends Component{
            render(){
                return(
                        <Consumer>
                            {/* harus dalam object, dan arrow function */}
                            {
                                (value) => {
                                    return(
                                        <Children {...this.props} {...value}/>
                                        // value nya menyimpan value global
                                    )
                                }
                            }
                        </Consumer>
                )
            }
        }
    )
}