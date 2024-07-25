import { Movie } from "../../type.ts";

type Props = {
	movie: Movie | undefined;
	truncate: (str: string, n: number) => string;
};
export const Layout = ({ movie, truncate }: Props) => {
  	return (
		<header
			className="text-white object-contain"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
			}}
		>
			<div className="ml-8 pt-36">
				<h1 className="text-4xl font-extrabold pb-1 text-left">{movie?.name}</h1>
				<div className="w-[45rem] leading-[1.3] pt-4 text-xs max-w-[360px] h-[80px] text-left">
				{movie && truncate(movie?.overview, 150)}
				</div>
			</div>
			{/* ① Tailwindのグラデーション */}
			<div className="h-[7.4rem] bg-gradual-gradient" />
		</header>
  	);
};