import { Container, Filters, Title, TopBar } from "@/components/shared";

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все товары" size="lg" className="font-extrabold" />
			</Container>

			<TopBar />

			<Container className="mt-10 pb-14">
				<div className="flex gap-[60px]">
					{/* Чекбоксы */}
					<div className="w-[250px]">
						<Filters />
					</div>

					{/* Фильтрация цен*/}
					<div className="flex-1">
						<div className="flex flex-col gap-16">Список товаров</div>
					</div>
				</div>
			</Container>
		</>
	);
}
