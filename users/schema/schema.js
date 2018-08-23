const graphql = require('graphql');
//const axios = require('axios');
const fetch = require('node-fetch');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;

const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  }
});

const UserType = new GraphQLObjectType({
  name: `User`,
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: `RootQueryType`,
  fields: {
    // GraphQL: { user(id: "23") { id, firstName } }
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        // Here we're going to DBB and find data we're looking for
        return fetch(`http://localhost:3000/users/${args.id}`).then(resp => resp.json());
        // return axios(`http://localhost:3000/users/${args.id}`).then(resp => resp.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
