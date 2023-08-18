import {
  Home,
  Signup,
  ForgetPassword,
  Product,
  AboutUs,
  ContactUs,
  Login,
} from "./screens";
import { ProductDetail } from "./screens";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    index: true,
    path: "/signup",
    element: <Signup />,
  },
  {
    index: true,
    path: "/login",
    element: <Login />,
  },
  {
    index: true,
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    index: true,
    path: "/product",
    element: <Product />,
  },

  {
    index: true,
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    index: true,
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    index: true,
    path: "/product-detail",
    element: <ProductDetail />,
  },
];

export default AppRoutes;
