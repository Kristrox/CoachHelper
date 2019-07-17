import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// const list = [
//   {
//     id: 'a',
//     firstname: 'Robin',
//     lastname: 'Wieruch',
//     year: 1988,
//   },
//   {
//     id: 'b',
//     firstname: 'Dave',
//     lastname: 'Davidds',
//     year: 1990,
//   },
// ];

// const ComplexList = () => (
//   <ul>
//     {list.map(item => (
//       <li key={item.id}>
//         <div>{item.id}</div>
//         <div>{item.firstname}</div>
//         <div>{item.lastname}</div>
//         <div>{item.year}</div>
//       </li>
//     ))}
//   </ul>
//     );

// export default ComplexList;

export default class Calend extends Component {
    render() {
        return(
            <div>
                <h1>Witaj</h1>
                <h2>TUTAJ KALENDARZ MA BYĆ</h2>
            </div>
        );
    }
}
// ReactDOM.render(<Calend />, document.getElementById('calendar'));
//ReactDOM.render(<ComplexList />, document.getElementById('calendar'));

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Calend />, document.getElementById("calendar"));
  });