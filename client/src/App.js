import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider} from 'react-apollo';

import NavBar from './components/NavBar';

import Heading from './components/Heading';
import Tabs from './components/Tabs';



//setting up the apolloclient
const client = new ApolloClient({
  uri:`http://localhost:4000/graphql`
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App" >
      <NavBar/>
      <Heading/>
      <Tabs/>
   
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
