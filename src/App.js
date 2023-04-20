// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import usersReducer from "./users/users-reducer"
import {configureStore} from "@reduxjs/toolkit";
import {Provider, useSelector} from "react-redux";
import {Routes, Route} from "react-router";
import Profile from "./profiles";
import OthersProfiles from "./profiles/profile-other";
import AdminControlledUserList from "./users";
import RegisterMainPage from "./users/register";
import GoldRegister from "./users/register-gold"
import BronzeRegister from "./users/register-bronze"
import AdminRegister from "./users/register-admin"
import Login from "./users/login";
import EditProfileComponent from "./profiles/edit-profile";
import HomePage from "./home";
import CurrentUser from "./users/current-user";
import TopNavigationBar from "./home/top-navigation-bar";
import WsbPage from "./wsb"
import WsbSearch from "./wsb/wsb-search"
import welcomeRecentNewUsersReducer from "./home/welcome/welcome-recent-new-users-reducer";
import followsReducer from "./follows/follows-reducer";
import SearchSingleStock from "./search";
import stockReducer from "./stock/stock-reducer";
import StockDetailScreen from "./search/stock-details";
import reviewsReducer from "./reviews/reviews-reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    welcomeUsers: welcomeRecentNewUsersReducer,
    follows:followsReducer,
    singlestock: stockReducer,
    reviews: reviewsReducer,
  }
})




function App() {
  return (
      <Provider store={store}>
        <div className="container">
          <CurrentUser>
            <TopNavigationBar/>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/profile/:uid" element={<OthersProfiles/>}/>
              <Route path="/other" element={<OthersProfiles/>}/>
              <Route path="/users" element={<AdminControlledUserList/>}/>
              <Route path="/register" element={<RegisterMainPage/>}/>
              <Route path="/register/bronze" element={<BronzeRegister/>}/>
              <Route path="/register/gold" element={<GoldRegister/>}/>
              <Route path="/register/admin" element={<AdminRegister/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="edit-profile" element={<EditProfileComponent/>}/>
              <Route path="/wsb" element={<WsbPage/>} />
              <Route path="/wsb/search" element={<WsbSearch />} />
              <Route path="/wsb/search/:searchTerm" element={<WsbSearch />}/>
              <Route path="/search" element={<SearchSingleStock/>}/>
              <Route path="/search/:searchStockCode" element={<SearchSingleStock/>}/>
              <Route path="/search/stock/:searchStockCode" element={<StockDetailScreen/>}/>
            </Routes>
          </CurrentUser>
        </div>
      </Provider>
  );
}

export default App;
