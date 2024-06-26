import {
	Container,
	Topside,
	Botside,
	RepoIcon,
	StarIcon,
	ForkIcon,
} from "./styles";
import { Link } from "react-router-dom";

interface Props {
	username: string;
	reponame: string;
	description?: string;
	language?: string;
	stars: number;
	forks: number;
}

const RepoCard: React.FC<Props> = ({
	username,
	reponame,
	description,
	language,
	stars,
	forks,
}) => {
	const languageClass = language ? language.toLowerCase() : "other";

	return (
		<Container>
			<Topside>
				<header>
					<RepoIcon />
					<Link to={`/${username}/${reponame}`}>{reponame}</Link>
				</header>
				<p>{description}</p>
			</Topside>

			<Botside>
				<ul>
					<li>
						<div className={`language ${languageClass}`}></div>
						<span>{language}</span>
					</li>
					<li>
						<StarIcon />
						<span>{stars}</span>
					</li>
					<li>
						<ForkIcon />
						<span>{forks}</span>
					</li>
				</ul>
			</Botside>
		</Container>
	);
};

export default RepoCard;
