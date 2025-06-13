
import Navbar from '../components/Navbar';
import MapComponent from '../components/MapComponent';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content">
        <div className="welcome-section">
          <h1>Welcome to RouteMapper</h1>
          <p>Plan your journey and discover the best routes between any two locations</p>
        </div>
        <MapComponent />
      </div>
    </div>
  );
}