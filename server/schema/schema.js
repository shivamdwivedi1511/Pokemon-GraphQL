const graphql=require("graphql");

//importing the schema of mongodb
const Pokemon = require("../models/pokemon");
const Group = require("../models/group");

const {GraphQLObjectType,
    GraphQLID,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt}=graphql;


//graphql schemas
    const PokemonType= new GraphQLObjectType({
        name:'Pokemon',
        fields:()=>({
            id:{type:GraphQLID},
            name:{type:GraphQLString},
            power_rate:{type:GraphQLInt},
            attack_rate:{type:GraphQLInt},
            defence_rate:{type:GraphQLInt},
            groupId:{type:GraphQLString},
            group:{
                type:GroupType,
                resolve(parent,args){
                    return Group.findById(parent.groupId);
                }
            }
        })
        });

    const GroupType= new GraphQLObjectType({
        name:'group',
        fields:()=>({
            id:{type:GraphQLID},
            name:{type:GraphQLString},
            about:{type:GraphQLString},
            pokemons:{
                type:new GraphQLList(PokemonType),
                resolve(parent,args){
                    return Pokemon.find({groupId:parent.id});
                }
            }
            
        })
    });



//root query
    const RootType=new GraphQLObjectType({
        name:'RootQueryType',
        fields:{
            pokemon:{
                type:PokemonType,
                args:{id:{type:GraphQLID}},
                resolve(parent,args){
                    return Pokemon.findById(args.id);
                }


            },
            group:{
                type:GroupType,
                args:{id:{type:GraphQLString}},
                resolve(parent,args){
                   
                    return Group.findById(args.id);
                }
            },
            pokemons:{
                type:new GraphQLList(PokemonType),
                resolve(parent,args){
                    return Pokemon.find({});
                }
            },
            groups:{
                type:new GraphQLList(GroupType),
                resolve(parent,args){
                    return Group.find({});

                }
            }
        }
    })


    const Mutation = new GraphQLObjectType({
        name:'Mutation',
        fields:{
            addGroup:{
                type:GroupType,
                args:{
                    name:{type:new GraphQLNonNull(GraphQLString)},
                    about:{type:new GraphQLNonNull(GraphQLString)}
                },
                resolve(parent,args){
                    let group=Group({
                        name:args.name,
                        about:args.about
                    })
                    return group.save();
                }
            },
            addPokemon:{
                type:PokemonType,
                args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                groupId:{type:new GraphQLNonNull(GraphQLString)},
                power_rate:{type:new GraphQLNonNull(GraphQLInt)},
                attack_rate:{type:new GraphQLNonNull(GraphQLInt)},
                defence_rate:{type:new GraphQLNonNull(GraphQLInt)},
               

                },
                resolve(parent,args){
                    let pokemon=new Pokemon({
                        name:args.name,
                        groupId:args.groupId,
                        power_rate:args.power_rate,
                        attack_rate:args.attack_rate,
                        defence_rate:args.defence_rate
                    })
                    return pokemon.save();
                }
            }
        }
    })
    
    module.exports = new GraphQLSchema({
        query:RootType,
        mutation:Mutation
    })