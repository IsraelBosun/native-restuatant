import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import { UserContext } from './context/UserContext';
import { useState } from 'react';

export default function App() {

  const [name, setName] = useState("")


  return (
    <UserContext.Provider value={{name, setName}}>
      <AppNavigation />
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
