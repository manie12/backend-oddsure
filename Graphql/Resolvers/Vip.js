import VipTip from '../../Models/Vip.js';

export const VipTipResolvers = {

    Query: {
        async getVipTip() {
            try {
                const VipTipsPost = await VipTip.find();
                return VipTipsPost;

            } catch (error) {
                throw new Error(error);
            }

        }
    },
    Mutation: {
        async getVipTip(_, { totalOdds, home, away, oddsToday }) {

            const newPost = new VipTip({
                totalOdds,
                home,
                away,
                oddsToday,
                createdAt: new Date().toISOString()

            });
            const VipTipsPost = await newPost.save();
            return VipTipsPost;
        }

    },

}