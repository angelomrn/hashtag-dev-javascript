import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <App />
  </StrictMode>,
)

// strictMode: duplica a função, porque o React espera que a fase de renderização de um componente seja pura. Isso significa que a função do seu componente deve sempre retornar o mesmo resultado dadas as mesmas props e state, e não deve alterar nada fora dela(variáveis globais, dados de API, etc.)