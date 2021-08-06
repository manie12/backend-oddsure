import { GoldenTipResolvers } from './GoldenTip.js'
import { FreeTipResolvers } from './FreeTip.js';
import { BasicTipResolvers } from './BasicTip.js';
import { VipTipResolvers } from './Vip.js';
import { previousResolvers } from './Previous.js';


export const resolvers = {

    Query: {
        ...GoldenTipResolvers.Query,
        ...FreeTipResolvers.Query,
        ...BasicTipResolvers.Query,
        ...VipTipResolvers.Query,
        ...previousResolvers.Query
    },
    Mutation: {
        ...GoldenTipResolvers.Mutation,
        ...FreeTipResolvers.Mutation,
        ...BasicTipResolvers.Mutation,
        ...VipTipResolvers.Mutation,
        ...previousResolvers.Mutation,
    }
}
