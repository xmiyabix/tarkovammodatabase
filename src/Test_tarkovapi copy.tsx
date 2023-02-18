import { request, gql } from 'graphql-request'
const query = gql`
{
    items(ammoName: "m855a1") {
        id
        name
        shortName
    }
}`


export default function run(){
    request('https://api.tarkov.dev/graphql', query).then((data) => console.log(data))
}
