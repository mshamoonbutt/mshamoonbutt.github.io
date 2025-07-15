import './index.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
      {/* Header/Navbar */}
      <header className="w-full bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="https://placehold.co/48x48" alt="Alex Carter Logo" className="w-12 h-12 rounded-full border-2 border-blue-500 shadow-sm" />
            <span className="text-2xl font-extrabold tracking-tight text-blue-700">Alex Carter</span>
          </div>
          <nav className="hidden md:flex gap-8 text-lg font-medium">
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </nav>
          {/* Mobile menu button (optional) */}
          <div className="md:hidden">
            {/* Add a hamburger menu here if you want mobile nav */}
          </div>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-center flex-1 px-6 py-12 gap-8 bg-gradient-to-br from-blue-100 to-purple-100">
        <img src="https://placehold.co/200x200" alt="Alex Carter" className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-white" />
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Alex Carter</h1>
          <p className="text-lg leading-relaxed">I'm a passionate graphic designer with over 5 years of experience helping brands tell their stories visually. My work blends creativity with strategy, ensuring every project not only looks great but also achieves its goals. From logos and branding to digital campaigns and print materials, I bring ideas to life with a keen eye for detail and a love for bold, modern design. Let's collaborate to make your next project stand out!</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-12 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project cards */}
          {[1,2,3,4,5].map((n) => (
            <div key={n} className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col">
              <img src={`https://placehold.co/400x250?text=Project+${n}`} alt={`Project ${n}`} className="w-full h-48 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">Project Title {n}</h3>
                <p className="flex-1 mb-4">A brief description of project {n}. This project showcases my skills in design, creativity, and problem-solving.</p>
                <a href="#" className="text-blue-600 hover:underline mt-auto">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-12 bg-gradient-to-tl from-blue-100 to-purple-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <form className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8 flex flex-col gap-4">
          <input type="text" placeholder="Name" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          <textarea placeholder="Message" rows={4} className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition">Send Message</button>
        </form>
        <div className="text-center mt-6">
          <a href="mailto:alex.carter@email.com" className="text-blue-600 hover:underline">alex.carter@email.com</a>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
            <a href="#" className="hover:text-blue-600">Instagram</a>
            <a href="#" className="hover:text-blue-600">Behance</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-white border-t mt-auto text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Alex Carter. All rights reserved.
      </footer>
    </div>
  )
}

export default App
