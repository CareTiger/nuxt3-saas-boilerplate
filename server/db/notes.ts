import { prisma } from ".";

// create a function to get all notes for a user
export const getNotesByProfileId = async (profile_id: number) => {
	return await prisma.note.findMany({
		where: {
			profile_id,
		},
		select: {
			id: true,
			profile_id: true,
			title: true,
			content: true,
		},
	});
};

// create a function to add a note for a user
export const addNote = async (
	profile_id: number,
	title: string,
	content: string
) => {
	return await prisma.note.create({
		data: {
			profile_id,
			title,
			content,
		},
	});
};
