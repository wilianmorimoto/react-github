import { useState } from "react";
import { Container, GithubLogo, SearchForm } from "./styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const [search, setSearch] = useState("");
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate(`/${search.toLowerCase().trim()}`)
  }

	return (
		<Container>
			<GithubLogo />
			<SearchForm onSubmit={handleSubmit}>
				<input
					value={search}
					onChange={e => setSearch(e.target.value)}
					placeholder="Enter Username or Repo..."
				/>
			</SearchForm>
		</Container>
	);
};

export default Header;
