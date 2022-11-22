
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/Login'
import { Dashbord } from './pages/Dashbord'
import { client } from './graphql/client'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
        </Routes>
        <Routes>
          <Route path="/dashbord" element={<Dashbord/>} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
