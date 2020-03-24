import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../store/count/countSlice'

const IndexPage = ({counted, increment, decrement}) => {
  return(
    <div>
      <h1>Simple implement Next.js With Redux Toolkit</h1>
      <h2>Counted: {counted}</h2>
      <hr/>
      <button onClick={() => increment()}>Increment</button> 
      &nbsp; 
      <button onClick={() => decrement()}>decrement</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  counted: state.count.count
})

const mapDispatchToProps = { increment, decrement }

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)