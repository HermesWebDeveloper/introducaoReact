import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FormularioInscricao from './formularioInscricao.jsx';
import FormularioPesquisa from './formularioPesquisa.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormularioInscricao />
    <hr></hr>
    <FormularioPesquisa />
    <hr></hr>
  </React.StrictMode>
);