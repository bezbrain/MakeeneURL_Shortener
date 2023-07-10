import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SharedLayout from "./pages/SharedLayout";
import MyURLs from "./pages/MyURLs";
import HowItWorks from "./pages/HowItWorks";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/myurls" element={<MyURLs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
