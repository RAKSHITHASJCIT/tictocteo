import React from 'react';
export default class Button extends React.Component{
    constructor(props){
        super(props)
        this.state={
        value:props.counter
        }
    }
    componentWillMount() {
        console.log("this is componentwillmount");
      }
    componentDidMount() {
        console.log("This is componentdidmount");
        // setInterval(()=>{
            // this.setState({value: this.state.value+1})
        // },3500)
      }
      static getDerivedStateFromProps(nextProps,prevState) {
          console.log("Inside Receive props",nextProps,prevState)
      }
    render ()
    {
        console.log(this.prop)
        console.log("inside render");
        return(
           <div>
               <button onClick={this.inc.bind(this)}>+</button>
               <button onClick={this.dec.bind(this)}>-</button>
               <p>Value:{this.state.value}</p>
           </div>
        ) 
    }
    dec(){
        let data=this.state.value
        data=data-1
        this.setState({value:data})
    }
    inc(){
        let data=this.state.value
        data=data+1
        this.setState({value:data})
    }
  
}
