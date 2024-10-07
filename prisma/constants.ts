import { hashSync } from "bcrypt";

export const categories = [
	{
		name: "Черный",
	},
	{
		name: "Зеленый",
	},
	{
		name: "Фруктовый",
	},
];

export const users = [
	{
		fullName: "User",
		email: "user@test.ru",
		password: hashSync("11111", 10),
		verified: new Date(),
		role: "USER",
	},
	{
		fullName: "Admin",
		email: "admin@test.ru",
		password: hashSync("11111", 10),
		verified: new Date(),
		role: "ADMIN",
	},
];

export const _packageTypes = [
	{ name: "В пакетиках", price: 150, volume: 100, imageUrl: "" },
	{ name: "Россыпью", price: 200, volume: 200, imageUrl: "" },
];

export const products = [
	{
		name: "Чай черный байховый",
		imageUrl: "",
		categoryId: 1,
	},
	{
		name: "Чай зеленый",
		imageUrl: "",
		categoryId: 2,
	},
	{
		name: "Чай зеленый с мятой",
		imageUrl: "",
		categoryId: 2,
	},
	{
		name: "Молочный улун",
		imageUrl: "",
		categoryId: 2,
	},
	{
		name: "Каркаде",
		imageUrl: "",
		categoryId: 3,
	},
];
