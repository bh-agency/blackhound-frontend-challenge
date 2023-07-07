import { Header } from "./components/header/Header"
import { Container } from "./components/container/Container"
import { Explanation } from "./components/explanation/Explanation"
import { TanInput } from "./components/tanInput/TanInput"

import './App.scss';

function App() {

  return (
    <>
      <Header />
      <Container>
        <Explanation />
        <TanInput />
      </Container>
    </>
  )
}

export default App
