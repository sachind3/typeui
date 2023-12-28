import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

const App = () => {
  return (
    <Routes>
      <Route element={<Home/>} index />
    </Routes>
  )
}
export default App