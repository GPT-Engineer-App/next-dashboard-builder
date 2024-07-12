import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to Acme Inc</h1>
      <p>Get started by navigating to the <Link to="/dashboard/home" className="text-blue-500">Dashboard</Link>.</p>
    </div>
  );
};

export default Index;