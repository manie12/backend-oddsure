import PreviousGame from '../../Models/Previous.js';

export const previousResolvers = {

    Query: {
        async getPreviouis() {
            try {
                const PreviousPost = await PreviousGame.find();
                return PreviousPost;

            } catch (error) {
                throw new Error(error);
            }

        }
    },
    Mutation: {
        async createGoldenTip(_, { date, home, away, gameType }) {

            const newPost = new PreviousGame({
                totalOdds,
                home,
                away,
                oddsToday,
                createdAt: new Date().toISOString()

            });
            const PreviousPost = await newPost.save();
            return PreviousPost;
        }

    },

}