import React, { Component } from 'react';
import {graphql,compose} from 'react-apollo';
import { Col, Form, FormGroup, Input ,Card,Button} from 'reactstrap';
import {getAllGroupQuery,addPokemonMutation, getAllPokemonQuery} from '../querys/query';




class AddPokemon extends Component {

    constructor(props){
        super(props);
       
        this.state={
            name:'',
            attack_rate:0,
            defence_rate:0,
            power_rate:0,
            groupId:''
        }
        
    }
    

    
    displayGroups(){
        console.log(this.props);
        
        var data = this.props.getAllGroupQuery;
        if(data.loading){
            return (<option disabled>loading</option>);
        }
        else{
            return data.groups.map(group=>{
                return (<option key={group.id} value={group.id}>{group.name}</option>);
            });
        }
    }
   
    
    submitForm(e){
        e.preventDefault();
        console.log(this.state);
        console.log(this.data);
        this.props.addPokemonMutation({
            
            variables:{
            name:this.state.name,
            groupId:this.state.groupId,
            attack_rate:this.state.attack_rate,
            defence_rate:this.state.defence_rate,
            power_rate:this.state.power_rate
            },
            refetchQueries:[{query:getAllPokemonQuery}]
        });
    }
    
  render() {
    return (
      <div>
            <Card className=" text-center">
                
            
            
            <Form id="add-book" onSubmit={this.submitForm.bind(this)} inline>
            
            <FormGroup row>
           
            <Col sm={3}>

                <Input type="text" name="name" id="name" placeholder="enter pokemon name" onChange={(e)=>this.setState({name:e.target.value})} />
                
            </Col>
            </FormGroup>

            <FormGroup row>
            
            <Col sm={3}>

                <Input type="number" name="power" id="power" placeholder="enter power rate" onChange={(e)=>this.setState({power_rate:e.target.value})}/>

            </Col>
            </FormGroup>


            <FormGroup row>
           
            <Col sm={3}>

                <Input type="number" name="action" id="attack" placeholder="enter attack rate" color="secondary" onChange={(e)=>this.setState({attack_rate:e.target.value})} />

            </Col>
            </FormGroup>

            <FormGroup row>
           
            <Col sm={3}>

                <Input type="number" name="defense" id="defense" placeholder="enter defense rate" onChange={(e)=>this.setState({defence_rate:e.target.value})}/>

            </Col>
            </FormGroup>

            <FormGroup row>
            <Col sm={3}>
            <Input type="select" onChange={(e)=>this.setState({groupId:e.target.value})}>

            <option>Select Group</option>
            {this.displayGroups()}
           

            </Input>
            </Col>
            </FormGroup >
            <FormGroup >

            <Button color="danger rounded-circle ">+</Button>
        </FormGroup>
        </Form>
        
        </Card>

        </div>
    );
  }
}

export default compose(
    graphql(getAllGroupQuery, {name: 'getAllGroupQuery' }),
    graphql(addPokemonMutation, {name:'addPokemonMutation' })
  )(AddPokemon);


