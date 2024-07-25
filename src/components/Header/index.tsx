import { useProps } from "./useProps";
import { Layout } from "./Layout";

export const Header = () => {
	const { show } = useProps();
	return <Layout show={show} />;
};