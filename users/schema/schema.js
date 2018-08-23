const graphql = require('graphql');
const _ = require('loadash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;

const users = [
  { id: `23`, firstName: `Benoît`, lastName: `Boucart`, age: 26 },
  { id: `47`, firstName: `Maxime`, lastName: `Boucart`, age: 29 }
];

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
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        // Here we're going to DBB and find data we're looking for
        return _.find(users, { id: args.id });
      }
    }
  }
});
