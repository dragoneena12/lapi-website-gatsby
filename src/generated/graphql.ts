import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};


export type Hotel = {
  __typename?: 'Hotel';
  id: Scalars['ID'];
  name: Scalars['String'];
  location: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  checkin: Stay;
  checkout: Stay;
  addHotel: Hotel;
};


export type MutationCheckinArgs = {
  input: Check;
};


export type MutationCheckoutArgs = {
  input: Check;
};


export type MutationAddHotelArgs = {
  input: NewHotel;
};

export type Query = {
  __typename?: 'Query';
  stays: Array<Stay>;
  hotels: Array<Hotel>;
};

export type Stay = {
  __typename?: 'Stay';
  id: Scalars['ID'];
  hotel: Hotel;
  checkin: Scalars['DateTime'];
  checkout: Scalars['DateTime'];
  user: Scalars['String'];
};

export type Check = {
  hotelId: Scalars['ID'];
};

export type NewHotel = {
  name: Scalars['String'];
  location: Scalars['String'];
};

export type FindHotelsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindHotelsQuery = (
  { __typename?: 'Query' }
  & { hotels: Array<(
    { __typename?: 'Hotel' }
    & Pick<Hotel, 'id' | 'name' | 'location'>
  )> }
);


export const FindHotelsDocument = gql`
    query findHotels {
  hotels {
    id
    name
    location
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    findHotels(variables?: FindHotelsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindHotelsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindHotelsQuery>(FindHotelsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findHotels');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;