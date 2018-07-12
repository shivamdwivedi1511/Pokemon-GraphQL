import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import {getAllPokemonQuery} from '../querys/query';
import {graphql} from 'react-apollo';
import PokemonDetail from '../components/PokemonDetail';




class AllPokemons extends Component{
    constructor(props){
        super(props);
        this.state={
            selected:null
        }
    }

    displayPokemons(){
        var data =this.props.data;
        
        if(data.loading){
         return(<li>loading</li>);
        }
        else{
           
            console.log(data);
          return data.pokemons.map(pokemon=>{
              
              switch(pokemon.group.name){
                  case "fire":
                    var col="danger";
                   break;
                   case "electric":
                   col="warning";
                   break;
                   case "water":
                   col="primary";
                   break;
                   case "ice":
                   col="danger";
                   break;
                   case "rock":
                   col="secondary";
                   break;
                   case "flying":
                   col="primary";
                   break;
                   case "ground":
                   col="dark";
                   break;
                   case "dragon":
                   col="dark";
                   break;
                   case "grass":
                   col="success";
                   break;
                   case "poison":
                   col="warning";
                   break;
                   default:
                   col="dark";
              }
            return(<Badge color={col} key={pokemon.id} className="all-pokemon" onClick={(e)=>{this.setState({selected:pokemon.id})}} pill>{pokemon.name}</Badge>);
    
          })
        }
      }
    render(){
        return(
            <div>
                <PokemonDetail pokemonid={this.state.selected}/>
                {this.displayPokemons()}
             
            </div>
            
        );
    }
}

export default graphql(getAllPokemonQuery)(AllPokemons);