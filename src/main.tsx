import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "react-hot-toast";
import './index.css'
import { ThemeProvider } from "./context/ThemeContext";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <ThemeProvider>

    <Toaster position="top-right" />

    <App />

  </ThemeProvider>
</StrictMode>,
)
