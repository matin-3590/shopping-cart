import { BrowserRouter, Route, Routes } from "react-router"
import HeaderMain from "./components/header/HeaderMain"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Cart from "./pages/cart/Cart"

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <HeaderMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
