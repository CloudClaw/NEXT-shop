import { Container, Filters, ProductCard, ProductsGroupList, Title, TopBar } from "@/components/shared";

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все товары" size="lg" className="font-extrabold" />
			</Container>

			<TopBar />

			<Container className="mt-10 pb-14">
				<div className="flex gap-[80px]">
					{/* Чекбоксы */}
					<div className="w-[250px]">
						<Filters />
					</div>
					{/* Фильтрация цен*/}
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList
								title="Смартфоны"
								items={[
									{
										id: 1,
										name: "Смартфон Apple iPhone 15 Pro 128GB Dual Sim Natural Titanium",
										price: 500,
										imageUrl: "https://img.mvideo.ru/Big/small_pic/200/30069473bb1.jpg",
										items: [{price: 500}],
									},
									{
										id: 2,
										name: "Смартфон Apple iPhone 15 Pro 128GB Dual Sim Natural Titanium",
										price: 500,
										imageUrl: "https://img.mvideo.ru/Big/small_pic/200/30069473bb1.jpg",
										items: [{price: 500}],
									},
									{
										id: 3,
										name: "Смартфон Apple iPhone 15 Pro 128GB Dual Sim Natural Titanium",
										price: 500,
										imageUrl: "https://img.mvideo.ru/Big/small_pic/200/30069473bb1.jpg",
										items: [{price: 500}],
									},
									{
										id: 4,
										name: "Смартфон Apple iPhone 15 Pro 128GB Dual Sim Natural Titanium",
										price: 500,
										imageUrl: "https://img.mvideo.ru/Big/small_pic/200/30069473bb1.jpg",
										items: [{price: 500}],
									},
									{
										id: 5,
										name: "Смартфон Apple iPhone 15 Pro 128GB Dual Sim Natural Titanium",
										price: 500,
										imageUrl: "https://img.mvideo.ru/Big/small_pic/200/30069473bb1.jpg",
										items: [{price: 500}],
									},
									{
										id: 5,
										name: "Смартфон Apple iPhone 15 Pro 128GB Dual Sim Natural Titanium",
										price: 500,
										imageUrl: "https://img.mvideo.ru/Big/small_pic/200/30069473bb1.jpg",
										items: [{price: 500}],
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title="Планшеты"
								items={[
									{
										id: 1,
										name: "Смартфон Apple iPhone 15 Pro 128GB Dual Sim Natural Titanium",
										price: 500,
										imageUrl: "https://img.mvideo.ru/Big/small_pic/200/30069473bb1.jpg",
										items: [{price: 500}],
									},
									{
										id: 2,
										name: "Смартфон Apple iPhone 15 Pro 128GB Dual Sim Natural Titanium",
										price: 500,
										imageUrl: "https://img.mvideo.ru/Big/small_pic/200/30069473bb1.jpg",
										items: [{price: 500}],
									},
									{
										id: 3,
										name: "Смартфон Apple iPhone 15 Pro 128GB Dual Sim Natural Titanium",
										price: 500,
										imageUrl: "https://img.mvideo.ru/Big/small_pic/200/30069473bb1.jpg",
										items: [{price: 500}],
									},
									{
										id: 4,
										name: "Смартфон Apple iPhone 15 Pro 128GB Dual Sim Natural Titanium",
										price: 500,
										imageUrl: "https://img.mvideo.ru/Big/small_pic/200/30069473bb1.jpg",
										items: [{price: 500}],
									},
									{
										id: 5,
										name: "Смартфон Apple iPhone 15 Pro 128GB Dual Sim Natural Titanium",
										price: 500,
										imageUrl: "https://img.mvideo.ru/Big/small_pic/200/30069473bb1.jpg",
										items: [{price: 500}],
									},
									{
										id: 5,
										name: "Смартфон Apple iPhone 15 Pro 128GB Dual Sim Natural Titanium",
										price: 500,
										imageUrl: "https://img.mvideo.ru/Big/small_pic/200/30069473bb1.jpg",
										items: [{price: 500}],
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
