# Build and Deploy a GraphQL API with Node.js, Apollo Server, MongoDB, and Heroku

## Tutorial Link
https://www.youtube.com/watch?v=VLVEkyQPguU&ab_channel=GiuseppePicciano

## GraphQL Requests
```
mutation createPodcast{
  createPodcast(input:{
    url: "test.net",
    name: "test"
  }){
    id
    url
    name
  }
}

mutation updatePodcast{
  updatePodcast(id:"5edcea45058698cfb5636c5b",input:{
    url: "test.net.com"
  }){
    id
    url
  }
}

mutation deletePodcast{
  deletePodcast(id: "5edcea45058698cfb5636c5b"){
    id
  }
}

query podcasts{
  podcasts{
    id
    name
    url
  }
}
```

## GraphQL Basics
https://www.youtube.com/watch?v=Dr2dDWzThK8