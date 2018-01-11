import {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';
import { ProviderType } from '../types/providerType'
import axios from 'axios';

const HealthCareQueryType = new GraphQLObjectType({
  name: 'HealthCareQuery',
  description: 'Heathcare Schema Query Root',
  fields: () => ({
    providers: {
      type: new GraphQLList(ProviderType),
      description: "List of all Providers",
      resolve: function() {
        return axios
          .get("http://localhost:9999/providers")
            .then(response => response.data)
            .catch(err => console.log(err))
      }
    }
  })
})

export { HealthCareQueryType }
