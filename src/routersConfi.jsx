import Review from "./pages/review/review";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/homePage";
import MainLayout from "./mainLayout/mainLayout";
import NotFound from "./pages/NotFound/NotFound";
import AboutUs from "./pages/AboutUs/AboutUs";
import AllProducts, { CategoriesLoader } from "./pages/AllProducts/AllProducts";
import ContactUs from "./pages/ContactUs/ContactUs";
import DeliveryInformation from "./pages/DeliveryInformation/DeliveryInfo";
import Favourite from "./pages/favourite/fav";
import LightingPage from "./pages/LightingPage/LightingPage";
import LocationMain from "./pages/location/locationMain";
import Login from "./pages/loginpage/login";
import Register from "./pages/Register/register";
import ForgetPassword from "./pages/ForgetPassword/forgetpassword";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import PurchaseTerms from "./pages/PurchaseTerms/PurchaseTerms";
import Questions from "./pages/Questions/Questions";
import Terms from "./pages/Terms/Terms";
import WebsiteMap from "./pages/WebsiteMap/WebsiteMap";
import WeeklyGiftCardsPage from "./pages/WeeklyGiftCardsPage/WeeklyGiftCardsPage";
import ReturnExchange from "./pages/ReturnExchange/ReturnExchangePage";
import Product_detail, { ProductLoader
} from "./pages/product_details/productdet";
import Cart from "./pages/cart/cart";
import Favorites from "./pages/favourite/fav";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "AboutUs", element: <AboutUs /> },
      {
        path: "/:category",
        element: <AllProducts />,
        loader: CategoriesLoader
      },
      {
        path: "/products/:id",
        element: <Product_detail />,
        loader: ProductLoader
      },
      { path: "ContactUs", element: <ContactUs /> },
      { path: "DeliveryInformation", element: <DeliveryInformation /> },
      { path: "fav", element: <Favorites /> },
      { path: "Lighting", element: <LightingPage /> },
      { path: "location", element: <LocationMain /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgetpassword", element: <ForgetPassword /> },
      { path: "PrivacyPolicy", element: <PrivacyPolicy /> },
      { path: "PurchaseTerms", element: <PurchaseTerms /> },
      { path: "Questions", element: <Questions /> },
      { path: "Terms", element: <Terms /> },
      { path: "WebsiteMap", element: <WebsiteMap /> },
      { path: "WeeklyGiftCardsPage", element: <WeeklyGiftCardsPage /> },
      { path: "ReturnExchange", element: <ReturnExchange /> },
  { path: "review/:productId", element: <Review /> },
  { path: "cart", element: <Cart /> },

      { path: "*", element: <NotFound /> }
    ]
  }
]);