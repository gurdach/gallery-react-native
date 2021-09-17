import React from 'react';
import { Provider} from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { store } from './src/redux/store'

import { GalleryScreen, PhotoScreen } from './src/screens';

const RootStack = createStackNavigator(
  {
  Gallery: {screen: GalleryScreen},
  Photo: {screen: PhotoScreen}, 
  },
  {
    initialRouteName: 'Gallery',
  }
);


const AppNavigator = createAppContainer(RootStack) //EXAMPLE HOC.

function App() {
  return(
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App;