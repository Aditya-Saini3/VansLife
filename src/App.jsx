import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, {loader as vansLoader} from "./pages/Vans";
import VansDetail from "./pages/VansDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import HostVans from "./pages/Host/hostVans";
import HostVansDetail  from "./pages/Host/hostVansDetail";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVansInfo from "./pages/Host/HostVansInfo";
import HostVansPhotos from "./pages/Host/HostVansPhotos";
import HostVansPricing from "./pages/Host/HostVansPricing";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login from "./pages/Login";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
      <Route path="*" element={<NotFound />} />
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="login" element={<Login />}/> 
      <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />}/> 
      <Route path="vans/:id" element={<VansDetail />}/>

      <Route path="host" element={<HostLayout />}>
        <Route 
          index 
          element={<Dashboard />} 
          loader={async() => {
            return null
          }}
        />
        <Route 
          path="income" 
          element={<Income />}
          loader={async() => {
            return null
          }}
        /> 
        <Route 
          path="vans" 
          element={<HostVans />}
          loader={async() => {
            return null
          }}
        /> 
        <Route 
          path="vans/:id" 
          element={<HostVansDetail />}
          loader={async() => {
            return null
          }}
        >
          <Route 
            index 
            element={<HostVansInfo />}
            loader={async() => {
              return null
            }}
          />
          <Route 
            path="pricing" 
            element={<HostVansPricing />}
            loader={async() => {
              return null
            }}
          />
          <Route 
            path="photos" 
            element={<HostVansPhotos />}
            loader={async() => {
              return null
            }}
          />
        </Route> 
        <Route path="reviews" element={<Reviews />}/> 
      </Route> 
    </Route>
))


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App