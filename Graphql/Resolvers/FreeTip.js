import FreeTip from '../../Models/Freetip.js';

export const FreeTipResolvers = {

    Query: {
        async getFreeTip() {
            try {
                const freeTipsPost = await FreeTip.find();
                return freeTipsPost;

            } catch (error) {
                throw new Error(error);
            }

        }
    },
    Mutation: {
        async createFreeTip(_, { home, away, pick }) {

            const newPost = new FreeTip({
                home,
                away,
                pick,
                createdAt: new Date().toISOString()

            });
            const freeTipsPost = await newPost.save();
            return freeTipsPost;
        }

    },

}