import { request, gql } from 'graphql-request'

const m4 = `{
    itemsByName(name: "m855") {
      name
      types
      avg24hPrice
      basePrice
      width
      height
      changeLast48hPercent
      iconLink
      link
      sellFor {
        price
        source
      }
    }
  }`



request('https://api.tarkov.dev/graphql', m4).then((data) => console.log(data))