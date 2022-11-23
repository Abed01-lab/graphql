import controller from "../controllers/controller";

const resolvers = {
	Query: {
		createUser: async (parent: any, { user }: any, context: any, info: any) =>
			await controller.createUser(user),
		getUser: async (parent: any, { email }: any, context: any, info: any) =>
			await controller.getUser(email),
		getAllUsers: async (parent: any, { email }: any, context: any, info: any) =>
			await controller.getAllUsers(),
		createPost: (parent: any, args: any, context: any, info: any) =>
			controller.createPost(args.email, args.post),
	},
};

export default resolvers;
