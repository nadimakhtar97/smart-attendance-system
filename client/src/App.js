import { ApplicationProvider } from './Components/Context/ApplicationContext';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <div>
      <ApplicationProvider>
        <Layout></Layout>
      </ApplicationProvider>
    </div>
  );
}

export default App;
