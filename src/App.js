import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers =[
  {
    'id':1,
    'image': 'https://cdn.pixabay.com/photo/2015/12/12/22/35/snowman-1090261__340.jpg',
    'name':'홍길동',
    'birthday':'961123',
    'gender':'남자',
    'job':'대학생'
  },
  {
    'id':2,
    'image': 'https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373__340.jpg',
    'name':'김길동',
    'birthday':'991017',
    'gender':'여자',
    'job':'개발자'
  },
  {
    'id':3,
    'image': 'https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626__340.jpg',
    'name':'박길동',
    'birthday':'94318',
    'gender':'여자',
    'job':'회사원'
  }
]

class App extends Component {
  render() {
   return(
     <div>
       {
         customers.map(data =>{
          return <Customer id={data.id} image={data.image} name={data.name} birthday={data.birthday} gender={data.gender} job={data.job} />
         })
       }
     </div>
   );
   }
}

export default App;
