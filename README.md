# apollo-server-bigint-issue

## How to reproduce this issue

1. Run `yarn start`.
2. Make a request to `http://localhost:4000/graphql` with the the following query (e.g. using Postman):

```graphql
query Query {
  region {
    id
    population
  }
}
```
