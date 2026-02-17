import './App.css'

function App() {
    return (
        <Router>
            <Navbar />
            <div className="page-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/resources" element={<Resources />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App
