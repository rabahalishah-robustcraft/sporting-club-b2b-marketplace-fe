import OnBoardingLayout from "./layouts/OnBoardingLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import LoginPageAdmin from "./features/auth/pages/LoginPageAdmin";
import LoginPageBusiness from "./features/auth/pages/LoginPageBusiness";
import LoginPageClub from "./features/auth/pages/LoginPageClub";
import SignupPageBusiness from "./features/auth/pages/SignupPageBusiness";
import SignupPageClub from "./features/auth/pages/SignupPageClub";
import Chatbox from "./features/chat/pages/Chatbox";
import { BusinessDashboard } from "./features/dashboard/pages/BusinessDashboard";
import { ClubDashboard } from "./features/dashboard/pages/ClubDashboard";
import { BusinessOnBoardingForm } from "./features/onboarding/pages/BusinessOnBoardingForm";
import { ClubOnBoardingForm } from "./features/onboarding/pages/ClubOnBoardingForm";
import LandingPage from "./pages/LandingPage";

import { Routes, Route } from "react-router-dom";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
import UsersContent from "./features/dashboard/components/UsersContent";
import ListingsContent from "./features/dashboard/components/ListingsContent";
import MessagesContent from "./features/dashboard/components/MessagesContent";
import PagesContent from "./features/dashboard/components/PagesContent";
import CategoriesContent from "./features/dashboard/components/CategoriesContent";
import ChatboxLayout from "./layouts/ChatboxLayout";
import AdminHomeContent from "./features/dashboard/components/AdminHomeContent";
import ClubDetailContent from "./features/dashboard/components/ClubDetailContent";
import NotFoundPage from "./pages/NotFoundPage";
import { useGlobalContext } from "./context";
import { useGetTest } from "./api/queries";
import LoadingPage from "./pages/LoadingPage";

function App() {
  const { authToken } = useGlobalContext();
  const { data: TestData } = useGetTest();
  console.log("Test Data: ", TestData);
  console.log("AuthToken: ", authToken);
  return (
    <Routes>
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/login" element={<LoginPageAdmin />} />
        <Route path="/club/login" element={<LoginPageClub />} />
        <Route path="/club/signup" element={<SignupPageClub />} />
        <Route path="/business/login" element={<LoginPageBusiness />} />
        <Route path="/business/signup" element={<SignupPageBusiness />} />
      </Route>

      <Route
        element={
          <ProtectedRoute isAdminRoute={false}>
            <OnBoardingLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/club/onboarding" element={<ClubOnBoardingForm />} />
        <Route
          path="/business/onboarding"
          element={<BusinessOnBoardingForm />}
        />
      </Route>

      <Route
        element={
          <ProtectedRoute isAdminRoute={false}>
            <UserDashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/club/dashboard" element={<ClubDashboard />} />
        <Route path="/business/dashboard" element={<BusinessDashboard />} />
      </Route>

      <Route
        element={
          <ProtectedRoute isAdminRoute={false}>
            <ChatboxLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/messages" element={<Chatbox />} />
      </Route>

      {/* Admin Protected Routes with the AdminLayout */}
      <Route
        element={
          <ProtectedRoute isAdminRoute={true}>
            <AdminDashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/admin/dashboard" element={<AdminHomeContent />} />
        <Route path="/admin/dashboard/users" element={<UsersContent />} />
        <Route path="/admin/dashboard/listings" element={<ListingsContent />} />
        <Route path="/admin/dashboard/messages" element={<MessagesContent />} />
        <Route path="/admin/dashboard/pages" element={<PagesContent />} />
        <Route
          path="/admin/dashboard/categories"
          element={<CategoriesContent />}
        />

        <Route
          path="/admin/dashboard/users/clubDetail"
          element={<ClubDetailContent />}
        />
      </Route>

      {/* Fallback for unknown routes */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
