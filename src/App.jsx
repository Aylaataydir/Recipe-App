
import './App.css'
import AppRouter from './router/AppRouter'
import { RecipeProvider } from "./context/RecipeContext"

function App() {


  return (
    <div className='app max-w-7xl mx-auto'>
      <RecipeProvider>
        <AppRouter />
      </RecipeProvider>

    </div>
  )
}

export default App
