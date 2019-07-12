import React from 'react'
import ReactDOM from 'react-dom'

import Sign from '../components/sign'



document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Sign />,
    document.body.appendChild(document.createElement("div"))
  );
});

