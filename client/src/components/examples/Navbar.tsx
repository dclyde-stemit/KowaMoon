import Navbar from '../Navbar';

export default function NavbarExample() {
  return <Navbar onSearchChange={(q) => console.log('Search:', q)} />;
}
