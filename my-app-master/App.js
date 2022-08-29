import { StatusBar } from 'expo-status-bar';
import { UserContextProvider } from './src/serivces/user.services';
import { Index } from './src/screens/index.screens';

export default function App() {
  return (
    <UserContextProvider>
      <Index />
      <StatusBar style="light" />
    </UserContextProvider>
  );
}
