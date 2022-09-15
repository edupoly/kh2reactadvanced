import React from 'react'
import { connect } from 'react-redux'
function Counter(props) {
    console.log(props)
    function inc(){
        props.dispatch({type:'INCREMENT'})
    }
    function dec(){
        props.dispatch({type:"DECREMENT"})
    }
    return (
        <div className='betterview'>
            <h1>Counter:{props.count}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    )
}

export default connect((store)=>{return store})(Counter)