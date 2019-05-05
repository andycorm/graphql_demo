class Friend {

    constructor(id, {firstName, lastName, gender, language, email, contacts}) {
        this.id = id;
        this.firstName = firstName,
        this.lastName = lastName,
        this.gender = gender,
        this.language = language,
        this.email = email;
        this.contacts = contacts;
    }

}

const friendDatabase = {};
let id = 0;
const getId = () => id++;

const resolvers = {
    getFriend: ({ id }) => {
        return new Friend(id, friendDatabase[id]);
    },
    createFriend: ({ input }) => {
      let id = getId();
      friendDatabase[id] = input;
      return new Friend(id, input);
    }
};

export default resolvers;