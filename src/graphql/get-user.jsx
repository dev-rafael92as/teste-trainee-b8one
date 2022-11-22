import { gql, useMutation } from "@apollo/client"

export const GET_LOGIN = gql`
    mutation singIn($input: SignInInput!) {
        signIn(input: $input) {
            token
            user {
                email
                name
            }
        }
    }
`