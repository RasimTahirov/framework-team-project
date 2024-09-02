export type TPainting = {
	id: number;
	locationId: number;
	authorId: number;
	created: string;
	imageUrl: string;
	name: string;
};

export type TAuthor = {
	id: number;
	name: string;
};

export type TLocations = {
	id: number;
	location: string;
};
