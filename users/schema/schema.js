const graphql = require('graphql');
//const axios = require('axios');
const fetch = require('node-fetch');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = graphql;

const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return fetch(`http://localhost:3000/companies/${parentValue.id}/users`).then(resp => resp.json());
      }
    }
  })
});

const UserType = new GraphQLObjectType({
  name: `User`,
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return fetch(`http://localhost:3000/companies/${parentValue.companyId}`).then(resp => resp.json());
      }
    }
  })
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
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return fetch(`http://localhost:3000/companies/${args.id}`).then(resp => resp.json());
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
