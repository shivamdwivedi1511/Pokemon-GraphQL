import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col,CardBody,Badge } from 'reactstrap';
import classnames from 'classnames';
import {graphql} from 'react-apollo';
import {getAllGroupQuery} from '../querys/query';
import AddPokemon from '../components/AddPokemon';
import AllPokemons from '../components/AllPokemons';



 class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    
    this.state = {
      activeTab: '1',
      collapse: false 
    };
  }
  


  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  displayGroups(){
    var data =this.props.data;
    if(data.loading){
      return(
        <div id="loading">
        <h1 className="display-2">Loading</h1>
        </div>
    );
    }
    else{
      console.log(data);
      return data.groups.map(group=>{
      
        return(<Col sm="4">
        <Card body >
          <CardTitle className="lead text-center"><Badge color="secondary">{group.name}</Badge></CardTitle>
          <CardText className="blockquote-footer text-center">{group.about}}.</CardText>
          
          <Card className="rounded-circle text-center">
            <CardBody >
           {group.pokemons.map(pokemon=>{
             return(<Badge color="success" key={pokemon.id} pill>{pokemon.name}</Badge>)
           })}
            </CardBody>
          </Card>
     
        </Card>
      </Col> );
      });
    }
  }
  render() {
    
    return (
    
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Pokemon's Groups
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Pokemons
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row className="text-center">
             { this.displayGroups()}
              
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row  className="text-center h6">
              <Col sm="12">
               <AllPokemons/>
              

              </Col>
            </Row>
            <Row >
            <AddPokemon/>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default graphql(getAllGroupQuery)(Tabs);