import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/Home"
import About from "./pages/About"
import DirectorContainer from "./pages/DirectorContainer"
import DirectorList from "./pages/DirectorList"
import DirectorForm from "./pages/DirectorForm"
import DirectorCard from "./pages/DirectorCard"
import MovieList from "./pages/MovieList"
import MovieForm from "./pages/MovieForm"
import MovieCard from "./pages/MovieCard"

// Optional – tests do not require it, but recommended
const ErrorPage = () => <h2>Page not found</h2>

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* DIRECTORS ROUTES */}
        <Route path="/directors" element={<DirectorContainer />}>
          
          {/* /directors */}
          <Route index element={<DirectorList />} />
          
          {/* /directors/new */}
          <Route path="new" element={<DirectorForm />} />

          {/* /directors/:id */}
          <Route path=":id" element={<DirectorCard />}>
            
            {/* /directors/:id */}
            <Route index element={<MovieList />} />

            {/* /directors/:id/movies/new */}
            <Route path="movies/new" element={<MovieForm />} />

            {/* /directors/:id/movies/:movieId */}
            <Route path="movies/:movieId" element={<MovieCard />} />
          </Route>
        </Route>

        {/* CATCH-ALL */}
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
