const SidePanal = () => {
  return (
    <div className="drop-icons">
      <ul>
        <li>
          <a href="/">
            <ion-icon name="home-sharp"></ion-icon>
          </a>
          <br />
          <small>Home</small>
        </li>
        <li>
          <a href="/">
            <ion-icon name="flame"></ion-icon>
          </a>
          <br />
          <small>Trending</small>
        </li>
        <li>
          <a href="/">
            <ion-icon name="library"></ion-icon>
          </a>
          <br />
          <small>Subscriptions</small>
        </li>
        <li>
          <a href="/">
            <ion-icon name="play-circle-sharp"></ion-icon>
          </a>
          <br />
          <small>Library</small>
        </li>
      </ul>
    </div>
  );
};

export default SidePanal;
