// mempelajari Reack Hooks  => stateless sekarang bisa memiliki state didalm lingkupnya sendiri
import React, { Component, useState , useEffect } from 'react';
import './Hooks.css'

// stateFull Component

// class Hooks extends Component {
//     state ={
//         count:0
//     }

//     OnUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     // di statefull pakai ini lifecycle (utk persamaan nanti di React Hooks)
//     componentDidMount(){
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentDidUpdate(){
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentWillUnmount(){
//         document.title = `Coba React 2` //kembali kesemula setelah keluar dari halaman hooks
//     }

//     render(){
//         return(
//             <div className='p-hooks'>
//                 <p>Nilai saya saat ini:  {this.state.count}</p>
//                 <button className='btn-hooks' onClick={this.OnUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }

// stateless component
// React Hooks(membaut bisa ada state dalam lingkup stateless component)

const Hooks = () => {

    const [count , setCount] = useState(0)

    // kegunaan nya sama dengan componentDidMount dan ComponentDidUpdate
    // di disebut React Hooks side effect => dengan menggunakan useEffect
    useEffect(() => {
        document.title = `Title Change: ${count}` //satu penulisan ini sama dengan componentDidMount dan ComponentDidUpdate
        return () => { //retturn kegunaan nya sama seperti componentWillUnmount
            document.title = `Coba React 2` //kembali kesemula setelah keluar dari halaman hooks, ini sama seperti componentWillUnmount
        }
    })

    return(
            <div className='p-hooks'>
                <p>Nilai saya saat ini: {count}</p>
                <button className='btn-hooks' onClick={() => {setCount(count + 1)}}>Update Nilai</button>
            </div>
    )
}

export default Hooks;
