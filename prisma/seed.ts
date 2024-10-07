import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { _packageTypes, categories, products } from "./constants";
import { Prisma } from "@prisma/client";

const randomPrice = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
	productId,
	productType,
	volume,
}: {
	productId: number;
	productType?: "bags" | "loose";
	volume?: 100 | 200 | 300;
}) => {
	return {
		productId,
		price: randomPrice(190, 600),
		productType,
		volume,
	} as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
	await prisma.user.createMany({
		data: [
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
		],
	});
	await prisma.category.createMany({
		data: categories,
	});
	await prisma.product.createMany({
		data: products,
	});
	await prisma.packageType.createMany({
		data: _packageTypes,
	});

	const tea1 = await prisma.product.create({
		data: {
			name: "Черный чай байховый",
			imageUrl: "",
			categoryId: 1,
			packageTypes: {
				connect: _packageTypes[0],
			},
		},
	});

	const tea2 = await prisma.product.create({
		data: {
			name: "Зеленый чай",
			imageUrl: "",
			categoryId: 2,
			packageTypes: {
				connect: _packageTypes[1],
			},
		},
	});

	const tea3 = await prisma.product.create({
		data: {
			name: "Чай каркаде",
			imageUrl: "",
			categoryId: 3,
			packageTypes: {
				connect: _packageTypes.slice(0, 2),
			},
		},
	});

	await prisma.productItem.createMany({
		data: [
			// Чай черный
			generateProductItem({ productId: tea1.id, productType: "bags", volume: 100 }),
			generateProductItem({ productId: tea1.id, productType: "bags", volume: 200 }),
			generateProductItem({ productId: tea1.id, productType: "bags", volume: 300 }),
			generateProductItem({ productId: tea1.id, productType: "loose", volume: 100 }),
			generateProductItem({ productId: tea1.id, productType: "loose", volume: 200 }),
			generateProductItem({ productId: tea1.id, productType: "loose", volume: 100 }),

			// Чай зеленый
			generateProductItem({ productId: tea2.id, productType: "bags", volume: 100 }),
			generateProductItem({ productId: tea2.id, productType: "bags", volume: 200 }),
			generateProductItem({ productId: tea2.id, productType: "bags", volume: 300 }),
			generateProductItem({ productId: tea2.id, productType: "loose", volume: 100 }),
			generateProductItem({ productId: tea2.id, productType: "loose", volume: 200 }),
			generateProductItem({ productId: tea2.id, productType: "loose", volume: 300 }),

			// Чай каркаде
			generateProductItem({ productId: tea3.id, productType: "bags", volume: 100 }),
			generateProductItem({ productId: tea3.id, productType: "bags", volume: 200 }),
			generateProductItem({ productId: tea3.id, productType: "bags", volume: 300 }),
			generateProductItem({ productId: tea3.id, productType: "loose", volume: 100 }),
			generateProductItem({ productId: tea3.id, productType: "loose", volume: 200 }),
			generateProductItem({ productId: tea3.id, productType: "loose", volume: 300 }),
		],
	});

	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				totalAmount: 0,
				token: "1111",
			},
			{
				userId: 2,
				totalAmount: 0,
				token: "2222",
			},
		],
	});

	await prisma.cartItem.create({
		data: {
			productItemId: 1,
			cartItemId: 1,
			quantity: 2,
		},
	});
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`; //Очищаем таблицу вместе с id
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
	try {
		await down();
		await up();
	} catch (e) {
		console.error(e);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
