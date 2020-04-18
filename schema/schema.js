const { ApolloServer, gql } = require('apollo-server-express');
const axios = require("axios");


const baseURL = `https://api.chucknorris.io/jokes/`;


const typeDefs = gql`
	type Query {
		categories : [Category!]!,
		getJoke(category:String!) : Joke!
    }
    
	type Category {
		name: String!
	}
	type Joke {
        id: String!
        content: String!
        url :   String!
	}
`;


const resolvers = {
    Query: {
        categories: async () => {
            const result = await axios.get(`${baseURL}categories`);
            const categories = result.data;
            return categories.map((category) => {
                return {
                    name: category
                };
            })
        },

        getJoke: async (parent, params) => {
            const category = params.category;
            const result = await axios.get(`${baseURL}random?category=${category}`);
            const joke = result.data;
            return {
                id: joke.id,
                content: joke.value,
                url: joke.icon_url
            };
        },
    }
};

module.exports = new ApolloServer({
    typeDefs,
    resolvers
});