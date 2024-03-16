import pencilIcon from './assets/penicon.png'
import './App.css'
import { Button } from "../@/components/ui/button.tsx"


function App() {

    const buttonClicked = (condition: string) => {
        console.log("You have selected " + condition)
    }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={pencilIcon} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Select your condition</h1>
      <div className="card">
          <Button variant="outline" className={'conditionButton'} onClick={() => buttonClicked('Dyslexia')}>Dyslexia</Button>
          <Button variant="outline" className={'conditionButton'} onClick={() => buttonClicked('Dysgraphia')}>Dysgraphia</Button>
          <Button variant="outline" className={'conditionButton'} onClick={() => buttonClicked('Dyscalculia')}>Dyscalculia</Button>
      </div>

    </>
  )
}

export default App
