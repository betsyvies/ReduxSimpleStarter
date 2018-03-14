import React, {Component} from 'react';
import Hobies from './Hobies';

const Secction = ({user}) => (
  <div>
    <div>{user.name}</div>
      <img src={user.img} alt="minus" />
    <div>{user.discription}</div>
    <Hobies key={user.hobies}
      {...user}/>
  </div>
)

export default Secction