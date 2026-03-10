import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const HeaderLogin = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-md py-3 px-4 sm:px-6">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-14"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/home")}
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderLogin;
