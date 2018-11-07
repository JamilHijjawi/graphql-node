import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Friend {
        id: ID,
        firstName: String
        lastName: String
        gender: Gender
        language: String
        email: String
        age: Int
        contacts: [Contacts]
    }

    type Contacts {
        firstName: String
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Alien {
        id: ID,
        firstName: String
        lastName: String
        planet: String 
    }

    type Query {
        getOneFriend(id: ID): Friend
        getAliens: [Alien]
    }

    input ContactsInput {
        firstName: String
        lastName: String
    }

    input FriendInput {
        id: ID,
        firstName: String!
        lastName: String
        gender: Gender
        language: String
        email: String
        age: Int
        contacts: [ContactsInput]

    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
    }
    
`;

export const schema = makeExecutableSchema({ typeDefs, resolvers });

