import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql'

import axios from 'axios';

import { ProviderType } from '../types/providerType'

const UserType = new GraphQLObjectType({
  name: "User",
  description: "Healthcare Provider Entity",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    provider: {
      type: ProviderType,
      resolve(obj) {
        return axios
          .get("http://localhost:9999/providers/" + obj.provider_id)
            .then(response => response.data[0])
            .catch(err => console.log(err))
      }
    }
  })
})

export {
  UserType
}
