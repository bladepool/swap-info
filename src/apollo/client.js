import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { BLOCK_SUBGRAPH, SWAP_SUBGRAPH } from '../constants'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://api.thegraph.com/subgraphs/name/${SWAP_SUBGRAPH}`
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/index-node/graphql'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: `https://api.thegraph.com/subgraphs/name/blocklytics/${BLOCK_SUBGRAPH}-blocks`
  }),
  cache: new InMemoryCache()
})
