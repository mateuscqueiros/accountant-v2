import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';
import '@mantine/core/styles.css';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
