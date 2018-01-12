import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql'

const ProviderType = new GraphQLObjectType({
  name: "Provider",
  description: "Healthcare Provider Entity",
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLString)},
    company_name: {type: new GraphQLNonNull(GraphQLString)}
  })
});

export {
  ProviderType
}
