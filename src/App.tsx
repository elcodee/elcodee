import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Portofolio from './pages/Portofolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Swal from 'sweetalert2';

function App() {
  Swal.fire({
    allowOutsideClick: false,
    title: "Your Info",
    confirmButtonColor: "#003153",
    html: `
    <b>Browser : </b> ${navigator.appName}<br /><br />
    <b>User Agent : </b> ${navigator.userAgent}<br />
    `,
  });
  return (
    <div className="gaspar" data-magic-cursor="show" data-color="crimson">
      {/* Header */}
      <Menu />

      <div className="container">
        {/* Home */}
        <Home />

        {/* About */}
        <About />

        {/* Portofolio */}
        <Portofolio />

        {/* Blog */}
        <Blog />

        {/* Contact */}
        <Contact />
        </div>
    </div>
  );
}

export default App;
