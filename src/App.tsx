// import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from './styles/globalStyles';
//authentication frontend
// import AuthContext from "context/AuthContext";
//creatorForm
import { CreatorProvider } from 'context/FormContext/CreatorContext';
import CreatorFormComponent from 'pages/anmeldung';
//pages
import AdminComponent from 'pages/admin/adminDashboard';
import AdminLoginPage from 'pages/admin/loginPage';
import NoMatch from 'pages/noMatch';
// overviews
import DashboardComponent from 'pages/admin/dashboardComponent';
import AdminCreators from 'pages/admin/adminCreators';
// new
import AdminBusinessesComponent from 'pages/admin/adminBusinesses';
import AdminCampaignComponent from 'pages/admin/adminCampaign';
// update
import AdminCreatorComponent from 'pages/admin/adminCreator';


function App() {
  //TODO: this is just so I can work on today*
  const isLoggedIn = true;

  return (
    <div className="App" style={{position: 'relative'}}>
      <GlobalStyle />
      <CreatorProvider>
        <Routes>   
        <Route index element={<CreatorFormComponent />} />
          <Route path="admin/login" element={<AdminLoginPage />} />
          <Route path="admin" element={isLoggedIn ? <AdminComponent /> : <Navigate to='login' />} >
            <Route index element={<DashboardComponent />} />
              <Route path="businesses" element={<AdminBusinessesComponent />} />
              <Route path="campaigns" element={<AdminCampaignComponent />} />
              <Route path="creators" element={<AdminCreators />} />
              <Route path="creator/:creatorId" element={ <AdminCreatorComponent />} />
              <Route path="*" element={<NoMatch />} />              
          </Route>
          <Route path="*" element={ <NoMatch />} />
      </Routes>
      </CreatorProvider>
    </div>
  );
}

export default App;
