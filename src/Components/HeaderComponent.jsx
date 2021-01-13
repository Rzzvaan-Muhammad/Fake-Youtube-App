import logo from "../youtube-logo.png";
import SearchBar from "./SearchBar";
import NavList from "./NavList";
const Header = (props) => {
  return (
    <header>
      <div className="list-panal">
        <a href="/">
          <ion-icon name="reorder-three-sharp"></ion-icon>
        </a>
      </div>

      <div className="icon">
        <a href="/">
          <img alt="Youtube-logo" src={logo}></img>
        </a>
      </div>
      <SearchBar handleSearch={props.handleSubmit} />
      <NavList />
    </header>
  );
};

export default Header;
