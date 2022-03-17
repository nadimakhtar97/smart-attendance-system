
import { ApplicationProvider } from './Components/Context/ApplicationContext';
import Layout from './Components/Layout/Layout';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div>
      <ChakraProvider>
      <ApplicationProvider>
        <Layout></Layout>
      </ApplicationProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;