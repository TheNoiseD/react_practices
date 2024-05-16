import pathImage from './assets/images/image-nevada.jpg'
import Button from './components/Button'
import WelcomeText from './components/WelcomeText'
import LiFruit from './components/LiFruit'
import ButtonState from './components/ButtonState'

const App = () => {

  const fruts = [ '🍎', '🍐', '🍇']
  const title = "Bienvenido a React"
  const user  = true

  return (
    <>
      <div className="center">
        <h1>{title}</h1>
        <br />
        <ButtonState />
        <br />
        <img src={pathImage} alt={`imagen-${title}`} />
        <br />
        <Button text="bnt 1" edad={18} />
        <Button text="bnt 2" edad={19} />

        <br />
        <WelcomeText user={user} />
        <br />
      </div>
      <ul>
        {
          fruts.map((frut, index) => <LiFruit key={index} frut={frut} />)
        }
      </ul>
    </> 
  );
}

export default App;