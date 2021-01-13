const NavList = () => {
  return (
    <div className="icon-list">
      <ul>
        <li>
          <a href="/">
            <ion-icon className="videocam" name="videocam-sharp"></ion-icon>
          </a>
        </li>
        <li>
          <a href="/">
            <ion-icon className="grid" name="grid"></ion-icon>
          </a>
        </li>
        <li>
          <a href="/">
            <ion-icon className="notifications" name="notifications"></ion-icon>
          </a>
        </li>
        <li className="person">
          <a href="/">
            <ion-icon name="person-circle-outline"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
