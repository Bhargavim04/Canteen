import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Register from './components/register';
import ViewCustomers from './components/viewCustomers';
import FoodItems from './components/foodItems';
import Login from './components/login';
import Cart from './components/cart';
import NotFound from './components/notFound';
import {Route,Routes,Navigate} from 'react-router-dom';
import UpdateCustomer from './components/updateCustomer';
import Logout from './components/logout';
import UpdateFoodItem from './components/updateFoodItem';
import AddFoodItem from './components/addFoodItem';
import FoodMenu from './components/foodMenu';
import AdminDashboard from './components/adminDashboard';
import NewProfile from './components/newProfile';
import Address from './components/addAddress';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/foodItems" element={<FoodItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address/add" element={<Address />} />
        <Route path="/viewCustomers" element={<ViewCustomers />} />
        <Route path="/customer/update/:id" element={<UpdateCustomer />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/new/profile" element={<NewProfile />} />

        <Route path="/foodMenu" element={<FoodMenu />} />
        <Route path="/foodItem/add" element={<AddFoodItem />} />
        <Route path="/foodItem/update/:id" element={<UpdateFoodItem />} />
        <Route path="/adminDashboard/*" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
