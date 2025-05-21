import chefClaudeLogo from "./images/chef-claude-icon.png";

export default function Header() {
  return (
    <header className="header">
      <img
        className="chef-claude-icon"
        src={chefClaudeLogo}
        alt="Chef Claude"
      />
      <h1>Chef Claude</h1>
    </header>
  );
}
