import { gql } from 'apollo-server';

export const typeDefs = gql`
type FreeTip{
    id:ID!
    home: String!
    away: String!
    pick: String!
    createdAt:String!

    
}
type GoldenTip{
    id:ID!
    totalOdds: String!
    home: String!
    away: String!
    oddsToday: String!
    createdAt:String!

}
type BasicTip{
    id:ID!
    totalOdds: String!
    home: String!
    away: String!
    oddsToday: String!
    createdAt:String!

}
type VipTip{
    id:ID!
    totalOdds: String!
    home: String!
    away: String!
    oddsToday: String!
    createdAt:String!

}
type previousGame{
    id:ID!

    date: String!
    home: String!
    away: String!
    gameType: String!

}





type Query{
    getFreeTip:[FreeTip]!
    getGoldenTip:[GoldenTip]!
    getBasicTip:[BasicTip]!
    getVipTip:[VipTip]!
    getPreviouis:[previousGame]!
}

type Mutation{

    createFreeTip(home:String!,away:String!,pick:String!):FreeTip!
    createGoldenTip(totalOdds:String!,home:String!,away:String!,oddsToday:String!):GoldenTip!
    createBasicTip(totalOdds:String!,home:String!,away:String!,oddsToday:String!):BasicTip!
    getVipTip(totalOdds:String!,home:String!,away:String!,oddsToday:String!):VipTip!
    createPreviousGame(date:String!,home:String!,away:String!,gameType:String!):previousGame!
   
}



 
`