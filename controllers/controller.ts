import { post, user } from "@prisma/client";
import prisma from "../prisma/client";
import { ApolloError } from "apollo-server-errors";

async function createUser({ email, password, firstname, lastname, age }: user) {
	return await prisma.user.create({
		data: {
			email,
			password,
			firstname,
			lastname,
			age,
		},
		include: {
			post: true,
		},
	});
}

async function createPost(email: string, post: post) {
	const user = await getUser(email); // for owais
	if (user !== null) {
		await prisma.post.create({
			data: {
				email,
				date: new Date().toISOString(),
				likes: post.likes,
				message: post.message,
			},
		});
		const addedUser = await getUser(email);
		// console.log(addedUser?.post[-1].date.toISOString());
		console.log(addedUser);

		return addedUser;
	} else {
		throw new ApolloError("Email is invalid", "BAD_REQUEST", { email });
	}
}

async function getUser(email: string) {
	const user = prisma.user.findUnique({
		where: {
			email,
		},
		include: {
			post: true,
		},
	});
	console.log(user);
	return user;
}

async function getAllUsers() {
	return prisma.user.findMany({
		include: {
			post: true,
		},
	});
}

export default {
	createUser,
	getUser,
	createPost,
	getAllUsers,
};
