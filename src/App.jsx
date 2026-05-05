import { PageTitle } from './components/PageTitle/PageTitle'
import { GlobalStyle } from './components/GlobalStyle'
import { Event } from './components/Event/Event'
import events from './upcoming-events.json'
import { PageBoard } from './components/PageBoard/PageBoard'

function App() {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <PageBoard events={events} />
      <GlobalStyle />
    </>
  )
}

export default App
