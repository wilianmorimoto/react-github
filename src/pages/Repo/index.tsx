import React from "react";
import { Link } from "react-router-dom";

import {
	Container,
	Breadcrumb,
	RepoIcon,
	Stats,
	StarIcon,
	ForkIcon,
	LinkButton,
	GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
	return (
		<Container>
			<Breadcrumb>
				<RepoIcon />

				<Link className={"username"} to={"/wilianmorimoto"}>
					wilianmorimoto
				</Link>

				<span>/</span>

				<Link className={"reponame"} to={"/wilianmorimoto/projeto-carros"}>
					projeto-carros
				</Link>
			</Breadcrumb>

			<p>Projeto Carros criado com o JornadaDoDev</p>

			<Stats>
				<li>
					<StarIcon />
					<b>6</b>
					<span>stars</span>
				</li>
				<li>
					<ForkIcon />
					<b>2</b>
					<span>forks</span>
				</li>
			</Stats>

			<LinkButton href={"https://github.com/wilianmorimoto/projeto-carros"}>
				<GithubIcon />
				<span>View on GitHub</span>
			</LinkButton>
		</Container>
	);
};

export default Repo;
