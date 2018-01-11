import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql'

const ProviderType = new GraphQLObjectType({
  name: "Provider",
  description: "Healthcare Provider Entity",
  fields: () => ({
    _id: {type: new GraphQLNonNull(GraphQLString)},
    name: {type: new GraphQLNonNull(GraphQLString)}
  })
});

export {
  ProviderType
}
