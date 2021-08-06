import GoldenTip from '../../Models/GoldenTip.js';

export const GoldenTipResolvers = {

    Query: {
        async getGoldenTip() {
            try {
                const GoldenTipsPost = await GoldenTip.find();
                return GoldenTipsPost;

            } catch (error) {
                throw new Error(error);
            }

        }
    },
    Mutation: {
        async createGoldenTip(_, { totalOdds, home, away, oddsToday }) {

            const newPost = new GoldenTip({
                totalOdds,
                home,
                away,
                oddsToday,
                createdAt: new Date().toISOString()

            });
            const GoldenTipsPost = await newPost.save();
            return GoldenTipsPost;
        }

    },

}