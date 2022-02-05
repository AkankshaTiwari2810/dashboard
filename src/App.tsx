
import { ChakraProvider } from '@chakra-ui/react';
import configureStore from './config/Store';
import { Provider, ReactReduxContext } from 'react-redux';
import PanelRenderer from './features/PanelRenderer';
import theme from './config/Theme';
import { initialState } from './config/InitialState';


const store = configureStore(initialState);

export const App = () => {
  return (
    <Provider store={store} context={ReactReduxContext}>
      <ChakraProvider theme={theme}>
        <PanelRenderer />
      </ChakraProvider>
    </Provider>
  );
};
