import {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';
import { UserType } from '../types/userType'
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
    },
    users: {
      type: new GraphQLList(UserType),
      description: "List of all users",
      resolve: function() {
        return axios
          .get("http://localhost:9999/users")
            .then(response => response.data)
            .catch(err => console.log(err))
      }
    }
  })
})

export { HealthCareQueryType }
