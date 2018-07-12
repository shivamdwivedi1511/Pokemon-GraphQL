import gql from "graphql-tag";



const getAllGroupQuery =gql`
{
    groups{
      id
      name
      about
      pokemons{
        name
        id
        groupId
        
      }
    }
  }
`
const getAllPokemonQuery =gql`
{
    pokemons{
      id
      name
      groupId
      power_rate
      attack_rate
      defence_rate
      group{
        name
      }
    }
}

`


const addPokemonMutation = gql`
mutation($groupId:String!,$defence_rate:Int!,$attack_rate:Int!,$power_rate:Int!,$name:String!){
  addPokemon(groupId:$groupId,defence_rate:$defence_rate,attack_rate:$attack_rate,power_rate:$power_rate,name:$name){
    id
    name
    defence_rate
    groupId
    power_rate
    attack_rate
    group{
      name
      
    }
  }
}`

const getPokemonQuery=gql`
query($id:ID){
  pokemon(id:$id) {
    id
    name
    power_rate
    attack_rate
    defence_rate
    group{
      name
      about
    }
  }
}
`


export {getAllGroupQuery,getAllPokemonQuery,addPokemonMutation,getPokemonQuery};