const { User } = require('../models');
const { signToken } = require('../utils/auth');
const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    // profile: async (parent, { profileId }) => {
    //   return Profile.findOne({ _id: profileId });
    // },
  },

  Mutation: {

    addUser: async (parent, variables) => {
      console.log(variables)
      const {username, password, email} = variables
      const user = await User.create({ username, password, email });

      const token = signToken(user);
      return { token, user };
    },
    // addProfile: async (parent, { name }) => {
    //   return Profile.create({ name });
    // },
    // addSkill: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     {
    //       $addToSet: { skills: skill },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // removeProfile: async (parent, { profileId }) => {
    //   return Profile.findOneAndDelete({ _id: profileId });
    // },
    // removeSkill: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     { $pull: { skills: skill } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;
