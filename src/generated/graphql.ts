import { GraphQLClient } from "graphql-request"
import * as Dom from "graphql-request/dist/types.dom"
import gql from "graphql-tag"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type Hotel = {
  __typename?: "Hotel"
  id: Scalars["ID"]
  name: Scalars["String"]
  location: Scalars["String"]
  owner: Scalars["String"]
  carbonAwards: Array<Scalars["String"]>
  fullereneAwards: Array<Scalars["String"]>
  carbonNanotubeAwards: Array<Scalars["String"]>
  grapheneAwards: Array<Scalars["String"]>
  diamondAwards: Array<Scalars["String"]>
}

export type HotelKey = {
  __typename?: "HotelKey"
  key: Scalars["String"]
}

export type Mutation = {
  __typename?: "Mutation"
  checkin: Stay
  checkout: Stay
  addHotel: Hotel
  editHotel: Hotel
}

export type MutationCheckinArgs = {
  input: Check
}

export type MutationCheckoutArgs = {
  input: Check
}

export type MutationAddHotelArgs = {
  input: NewHotel
}

export type MutationEditHotelArgs = {
  input: EditHotel
}

export type Query = {
  __typename?: "Query"
  stays: Array<Stay>
  stayCount: Scalars["Int"]
  hotels: Array<Hotel>
  hotel: Hotel
  hotelKey: HotelKey
}

export type QueryHotelArgs = {
  id: Scalars["ID"]
}

export type QueryHotelKeyArgs = {
  id: Scalars["ID"]
}

export enum Role {
  Admin = "ADMIN",
  Partner = "PARTNER",
  User = "USER",
}

export type Stay = {
  __typename?: "Stay"
  id: Scalars["ID"]
  hotel: Hotel
  checkin: Scalars["DateTime"]
  checkout: Scalars["DateTime"]
  user: Scalars["String"]
}

export type Check = {
  hotelId: Scalars["ID"]
  otp: Scalars["String"]
}

export type EditHotel = {
  id: Scalars["ID"]
  name: Scalars["String"]
  location: Scalars["String"]
  carbonAwards: Array<Scalars["String"]>
  fullereneAwards: Array<Scalars["String"]>
  carbonNanotubeAwards: Array<Scalars["String"]>
  grapheneAwards: Array<Scalars["String"]>
  diamondAwards: Array<Scalars["String"]>
}

export type NewHotel = {
  name: Scalars["String"]
  location: Scalars["String"]
  carbonAwards: Array<Scalars["String"]>
  fullereneAwards: Array<Scalars["String"]>
  carbonNanotubeAwards: Array<Scalars["String"]>
  grapheneAwards: Array<Scalars["String"]>
  diamondAwards: Array<Scalars["String"]>
}

export type AddHotelMutationVariables = Exact<{
  name: Scalars["String"]
  location: Scalars["String"]
  carbonAwards: Array<Scalars["String"]> | Scalars["String"]
  fullereneAwards: Array<Scalars["String"]> | Scalars["String"]
  carbonNanotubeAwards: Array<Scalars["String"]> | Scalars["String"]
  grapheneAwards: Array<Scalars["String"]> | Scalars["String"]
  diamondAwards: Array<Scalars["String"]> | Scalars["String"]
}>

export type AddHotelMutation = { __typename?: "Mutation" } & {
  addHotel: { __typename?: "Hotel" } & Pick<
    Hotel,
    | "id"
    | "name"
    | "location"
    | "owner"
    | "carbonAwards"
    | "fullereneAwards"
    | "carbonNanotubeAwards"
    | "grapheneAwards"
    | "diamondAwards"
  >
}

export type CheckinMutationVariables = Exact<{
  hotelId: Scalars["ID"]
  otp: Scalars["String"]
}>

export type CheckinMutation = { __typename?: "Mutation" } & {
  checkin: { __typename?: "Stay" } & Pick<Stay, "id" | "checkin" | "checkout">
}

export type CheckoutMutationVariables = Exact<{
  hotelId: Scalars["ID"]
  otp: Scalars["String"]
}>

export type CheckoutMutation = { __typename?: "Mutation" } & {
  checkout: { __typename?: "Stay" } & Pick<Stay, "id" | "checkin" | "checkout">
}

export type EditHotelMutationVariables = Exact<{
  id: Scalars["ID"]
  name: Scalars["String"]
  location: Scalars["String"]
  carbonAwards: Array<Scalars["String"]> | Scalars["String"]
  fullereneAwards: Array<Scalars["String"]> | Scalars["String"]
  carbonNanotubeAwards: Array<Scalars["String"]> | Scalars["String"]
  grapheneAwards: Array<Scalars["String"]> | Scalars["String"]
  diamondAwards: Array<Scalars["String"]> | Scalars["String"]
}>

export type EditHotelMutation = { __typename?: "Mutation" } & {
  editHotel: { __typename?: "Hotel" } & Pick<
    Hotel,
    | "id"
    | "name"
    | "location"
    | "owner"
    | "carbonAwards"
    | "fullereneAwards"
    | "carbonNanotubeAwards"
    | "grapheneAwards"
    | "diamondAwards"
  >
}

export type FindHotelsQueryVariables = Exact<{ [key: string]: never }>

export type FindHotelsQuery = { __typename?: "Query" } & {
  hotels: Array<
    { __typename?: "Hotel" } & Pick<Hotel, "id" | "name" | "location" | "owner">
  >
}

export type StayCountQueryVariables = Exact<{ [key: string]: never }>

export type StayCountQuery = { __typename?: "Query" } & Pick<Query, "stayCount">

export type FindMyStaysQueryVariables = Exact<{ [key: string]: never }>

export type FindMyStaysQuery = { __typename?: "Query" } & {
  stays: Array<
    { __typename?: "Stay" } & Pick<Stay, "id" | "checkin" | "checkout">
  >
}

export type GetHotelDetailQueryVariables = Exact<{
  id: Scalars["ID"]
}>

export type GetHotelDetailQuery = { __typename?: "Query" } & {
  hotel: { __typename?: "Hotel" } & Pick<
    Hotel,
    | "id"
    | "name"
    | "location"
    | "owner"
    | "carbonAwards"
    | "fullereneAwards"
    | "carbonNanotubeAwards"
    | "grapheneAwards"
    | "diamondAwards"
  >
}

export type GetHotelKeyQueryVariables = Exact<{
  id: Scalars["ID"]
}>

export type GetHotelKeyQuery = { __typename?: "Query" } & {
  hotelKey: { __typename?: "HotelKey" } & Pick<HotelKey, "key">
}

export const AddHotelDocument = gql`
  mutation addHotel(
    $name: String!
    $location: String!
    $carbonAwards: [String!]!
    $fullereneAwards: [String!]!
    $carbonNanotubeAwards: [String!]!
    $grapheneAwards: [String!]!
    $diamondAwards: [String!]!
  ) {
    addHotel(
      input: {
        name: $name
        location: $location
        carbonAwards: $carbonAwards
        fullereneAwards: $fullereneAwards
        carbonNanotubeAwards: $carbonNanotubeAwards
        grapheneAwards: $grapheneAwards
        diamondAwards: $diamondAwards
      }
    ) {
      id
      name
      location
      owner
      carbonAwards
      fullereneAwards
      carbonNanotubeAwards
      grapheneAwards
      diamondAwards
    }
  }
`
export const CheckinDocument = gql`
  mutation checkin($hotelId: ID!, $otp: String!) {
    checkin(input: { hotelId: $hotelId, otp: $otp }) {
      id
      checkin
      checkout
    }
  }
`
export const CheckoutDocument = gql`
  mutation checkout($hotelId: ID!, $otp: String!) {
    checkout(input: { hotelId: $hotelId, otp: $otp }) {
      id
      checkin
      checkout
    }
  }
`
export const EditHotelDocument = gql`
  mutation editHotel(
    $id: ID!
    $name: String!
    $location: String!
    $carbonAwards: [String!]!
    $fullereneAwards: [String!]!
    $carbonNanotubeAwards: [String!]!
    $grapheneAwards: [String!]!
    $diamondAwards: [String!]!
  ) {
    editHotel(
      input: {
        id: $id
        name: $name
        location: $location
        carbonAwards: $carbonAwards
        fullereneAwards: $fullereneAwards
        carbonNanotubeAwards: $carbonNanotubeAwards
        grapheneAwards: $grapheneAwards
        diamondAwards: $diamondAwards
      }
    ) {
      id
      name
      location
      owner
      carbonAwards
      fullereneAwards
      carbonNanotubeAwards
      grapheneAwards
      diamondAwards
    }
  }
`
export const FindHotelsDocument = gql`
  query findHotels {
    hotels {
      id
      name
      location
      owner
    }
  }
`
export const StayCountDocument = gql`
  query stayCount {
    stayCount
  }
`
export const FindMyStaysDocument = gql`
  query findMyStays {
    stays {
      id
      checkin
      checkout
    }
  }
`
export const GetHotelDetailDocument = gql`
  query getHotelDetail($id: ID!) {
    hotel(id: $id) {
      id
      name
      location
      owner
      carbonAwards
      fullereneAwards
      carbonNanotubeAwards
      grapheneAwards
      diamondAwards
    }
  }
`
export const GetHotelKeyDocument = gql`
  query getHotelKey($id: ID!) {
    hotelKey(id: $id) {
      key
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    addHotel(
      variables: AddHotelMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<AddHotelMutation> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<AddHotelMutation>(AddHotelDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "addHotel"
      )
    },
    checkin(
      variables: CheckinMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<CheckinMutation> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<CheckinMutation>(CheckinDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "checkin"
      )
    },
    checkout(
      variables: CheckoutMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<CheckoutMutation> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<CheckoutMutation>(CheckoutDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "checkout"
      )
    },
    editHotel(
      variables: EditHotelMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<EditHotelMutation> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<EditHotelMutation>(EditHotelDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "editHotel"
      )
    },
    findHotels(
      variables?: FindHotelsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<FindHotelsQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<FindHotelsQuery>(FindHotelsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "findHotels"
      )
    },
    stayCount(
      variables?: StayCountQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<StayCountQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<StayCountQuery>(StayCountDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "stayCount"
      )
    },
    findMyStays(
      variables?: FindMyStaysQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<FindMyStaysQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<FindMyStaysQuery>(FindMyStaysDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "findMyStays"
      )
    },
    getHotelDetail(
      variables: GetHotelDetailQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetHotelDetailQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<GetHotelDetailQuery>(
            GetHotelDetailDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getHotelDetail"
      )
    },
    getHotelKey(
      variables: GetHotelKeyQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetHotelKeyQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<GetHotelKeyQuery>(GetHotelKeyDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getHotelKey"
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
