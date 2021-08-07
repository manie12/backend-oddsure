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
        async createPreviousGame(_, { date, home, away, gameType }) {

            const newPost = new PreviousGame({
                date,
                home,
                away,
                gameType,

            });
            const PreviousPost = await newPost.save();
            return PreviousPost;
        }

    },

}