import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DoctorBooking from './components/Booking/DoctorBooking/DoctorBooking';
import BookingSuccess from './components/Booking/BookingSuccess';
import BookingInvoice from './components/Booking/BookingInvoice/BookingInvoice';
import DoctorProfile from './components/Doctor/DoctorProfile/DoctorProfile';
import Appointments from './components/Doctor/Appointments/Appointments';
import MyPatients from './components/Doctor/MyPatients/MyPatients';
import Reviews from './components/Doctor/Reviews/Reviews';
import Schedule from './components/Doctor/Schedule/Schedule';
import ProfileSetting from './components/Doctor/ProfileSetting/ProfileSetting';
import ChangePassword from './components/Doctor/ChangePassword/ChangePassword';
import AdminDashboard from './components/Admin/Dashboard/Dashboard';
import AdminAppointments from './components/Admin/Appointments/Appointments';
import Doctors from './components/Admin/Doctors/Doctors';
import Patients from './components/Admin/Patients/Patients';
import Profile from './components/Admin/Profile/Profile';
import Transactions from './components/Admin/Transactions/Transactions';
import Specialites from './components/Admin/Specialites/Specialites';
import AdminReviews from './components/Admin/Reviews/Reviews'
import PatientFavouriteDoctor from './components/Doctor/PatientFavourite/PatientFavourite';
import DoctorInvoice from './components/Doctor/Invoice/DoctorInvoice';
import SearchDoctor from './components/Doctor/SearchDoctor/SearchDoctor';
import Blogs from './components/Doctor/Blogs/Blogs';
import BlogsEdit from './components/Doctor/Blogs/BlogsEdit';
import AddBlog from './components/Doctor/Blogs/AddBlog';
import Dashboard from './components/Doctor/Dashboard/Dashboard';
import AppointmentPage from './components/Appointment/AppointmentPage';
import TrackAppointment from './components/TrackAppointment/TrackAppointment';
import Treatment from './components/Doctor/Treatment/Treatment';
import Prescription from './components/Doctor/Prescription/Prescription';
import PrescriptionView from './components/Doctor/Prescription/PrescriptionView';
import TreatmentEdit from './components/Doctor/Treatment/TreatmentEdit';
import ViewAppointment from './components/Doctor/Appointments/ViewAppointment';
import SignInFormAdmin from './components/Admin/Login/SignInForm';
import UnverifiedDoctors from './components/Admin/Doctors/unverifiedDoc';
import DoctorProfileSetting from './components/Doctor/ProfileSetting/DoctorProfileSetting';

const router = createBrowserRouter([

  { path: '/appointment', element: <AppointmentPage /> },
  {path: '/track-appointment', element: <TrackAppointment/>},

  { path: '/doctors', element: <SearchDoctor /> },
  { path: '/doctors/profile/:id', element: <DoctorProfile /> },



  { path: '/dashboard', element: <Dashboard /> },
  { path: '/dashboard/my-patients', element: <MyPatients /> },
  { path: '/dashboard/reviews', element: <Reviews /> },
  { path: '/dashboard/schedule', element: <Schedule /> },
  { path: '/dashboard/appointments', element: <Appointments /> },
  { path: '/dashboard/appointments/:id', element: <ViewAppointment /> },
  { path: '/dashboard/prescription', element: <Prescription /> },
  { path: '/dashboard/prescription/:id', element: <PrescriptionView /> },
  { path: '/dashboard/appointment/treatment/:id', element: <Treatment /> },
  { path: '/dashboard/appointment/treatment/edit/:id', element: <TreatmentEdit /> },

  { path: '/dashboard/change-password', element: <ChangePassword /> },
  { path: '/dashboard/profile-setting', element: <ProfileSetting /> },
  { path: '/dashboard/favourite', element: <PatientFavouriteDoctor /> },
  { path: '/dashboard/invoices', element: <DoctorInvoice /> },
  { path: '/dashboard/blogs', element: <Blogs /> },
  { path: '/dashboard/blogs/:id', element: <BlogsEdit /> },
  { path: '/dashboard/blogs/create', element: <AddBlog /> },

  { path: '/booking/:doctorId', element: <DoctorBooking /> },
  { path: '/booking/success/:id', element: <BookingSuccess /> },
  { path: '/booking/invoice/:id', element: <BookingInvoice /> },

  // Dashboard
  { path: '/', element: <SignInFormAdmin /> }, 
  { path: '/admin/dashboard',    element: <PrivateRoute>   <AdminDashboard />    </PrivateRoute>   },
  { path: '/admin/appointments', element: <PrivateRoute>   <AdminAppointments /> </PrivateRoute>   },
  { path: '/admin/doctors',      element: <PrivateRoute>   <Doctors />           </PrivateRoute>   },
  { path: '/admin/undoctors',    element: <PrivateRoute>   <UnverifiedDoctors/>  </PrivateRoute>   },
  { path: '/admin/patients',     element: <PrivateRoute>   <Patients />          </PrivateRoute>   },
  { path: '/admin/profile',      element: <PrivateRoute>   <Profile />           </PrivateRoute>   },
  { path: '/admin/reviews',      element: <PrivateRoute>   <AdminReviews />      </PrivateRoute>   },
  { path: '/admin/transaction',  element: <PrivateRoute>   <Transactions />      </PrivateRoute>   },
  { path: '/admin/specialites',  element: <PrivateRoute>   <Specialites />       </PrivateRoute>   },

  // { path: '/appointment', element: <PrivateRoute><AppointMent /></PrivateRoute> },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
