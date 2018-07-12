import React, { Component } from 'react';
import {getPokemonQuery} from '../querys/query';
import {graphql} from 'react-apollo';
import { Badge,Breadcrumb,BreadcrumbItem,Button } from 'reactstrap';

class PokemonDetail extends Component{
    
    displayPokDetail(){
        const {pokemon}=this.props.data;
        if(pokemon){
            return(
                <div>
                    <Badge color="dark">
                    <h2>{pokemon.name}</h2>
                    </Badge>
                    
      
                    <p>Group:  {pokemon.group.name}</p>
                    
                    <Button outline color="warning">Attack Rate:  {pokemon.attack_rate}</Button>
                    <Button outline color="success">Defence Rate:  {pokemon.defence_rate}</Button>
                    <Button outline color="danger">Power Rate:  {pokemon.power_rate}</Button>
                    
                    <Breadcrumb>
                    <BreadcrumbItem active>
                    <p>About Group:  {pokemon.group.about}</p>
                    </BreadcrumbItem>
                    </Breadcrumb>
                    
                </div>
            )
        }
    }
    render(){
        console.log(this.props);
        return(
            <div id="pokemon-detail">
            {this.displayPokDetail()}
            </div>
        )
    }

}

export default graphql(getPokemonQuery,{
    options:(props)=>{
        return{
            variables:{
                id:props.pokemonid
            }
        }
    }
})(PokemonDetail);