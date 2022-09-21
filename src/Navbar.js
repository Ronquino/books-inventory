
const Navbar = () => {
  
  return ( 
    <nav className="navbar">
      <h1>Books Catalogue</h1>
      <div className="links">
        <a className='home-link' href="/home">Home</a>
        <a className='home-link' href="/books">All Books</a>
      </div>
    </nav>
  );
}
 
export default Navbar;