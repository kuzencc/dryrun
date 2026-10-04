import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/Records">Records</a>
        </li>
      </ul>
    </div>
  );
}
