const data = [
  {
    label: "About",
    url: "#about",
  },
  {
    label: "Work",
    url: "#work",
  },
  {
    label: "Contact",
    url: "#contact",
  },
];

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-gray-800 text-white flex justify-between items-center p-3">
        <div className="navbar-container">@Dio Alfino</div>
        <ul className="navbar-container-menu flex">
          {data.map((item, key) => (
            <li key={key} className="navbar-container-menu">
              <a
                className="navbar-container-menu-links text-gray-300 hover:text-white px-4 py-2"
                href={item.url}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
