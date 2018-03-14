import React from 'react';

class List extends Component {
  render(){

    const UserList = this.props.data.map((user,index)=>{
       return <li key={index}>{user}</li> 
      })
    
      return (
         <div>{UserList}</div>
      )
  }
 }
 
 export default List