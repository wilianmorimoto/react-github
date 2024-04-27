import {Container, Main, LeftSide, RightSide, Repos} from './styles'

import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'

const Profile = () => {
  return (
		<Container>
			<Main>
				<LeftSide>
					<ProfileData
						username={"wilianmorimoto"}
						name={"Wilian Hiroyuki Morimoto"}
						avatarUrl={"https://avatars.githubusercontent.com/u/158129043?v=4"}
						followers={12}
						following={7}
						company={undefined}
						location={"São Paulo, Brazil"}
						e-mail={"wilianhmorimoto@gmail.com"}
						blog={undefined}
					/>
				</LeftSide>

				<RightSide>
					<Repos>
						<h2>Random repos</h2>

						<div>
							{[1,2,3,4,5,6].map(n => (
								<RepoCard
									key={n}
									username={'wilianmorimoto'}
									reponame={'projeto-carros'}
									description={'Projeto Carros criado com o JornadaDoDev'}
									language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
									stars={6}
									forks={2}
								/>
							))}
						</div>
					</Repos>
				</RightSide>
			</Main>
		</Container>
	);
}

export default Profile