import BasicTip from '../../Models/Basic.js';

export const BasicTipResolvers = {

    Query: {
        async getBasicTip() {
            try {
                const BasicTipsPost = await BasicTip.find();
                return BasicTipsPost;

            } catch (error) {
                throw new Error(error);
            }

        }
    },
    Mutation: {
        async createBasicTip(_, { totalOdds, home, away, oddsToday }) {

            const newPost = new BasicTip({
                totalOdds,
                home,
                away,
                oddsToday,
                createdAt: new Date().toISOString()

            });
            const BasicTipsPost = await newPost.save();
            return BasicTipsPost;
        }

    },

}