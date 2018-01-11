import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { HealthCareQueryType } from './query/query';

export default new GraphQLSchema({
  query: HealthCareQueryType
})
