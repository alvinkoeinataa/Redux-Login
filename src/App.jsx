import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onLogin, onLogout } from "./redux/actions/authAction";
import { onGetProduct } from "./redux/actions/productAction";
import "./App.css";

function App() {
  const { isAuth, loginError } = useSelector((state) => state.authReducer);
  const { listData } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(onLogin(email, password));
  };

  const handleLogOut = () => {
    dispatch(onLogout());
    setEmail("");
    setPassword("");
  };

  const getProduct = () => {
    dispatch(onGetProduct());
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {!isAuth ? (
        <div>
          <h1>Login Page</h1>
          <label>Email anda: </label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan email" /> <br />
          <label>Password : </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan password" /> <br />
          <button onClick={handleLogin}>Login</button>
          {loginError && <h3>Email dan password anda salah</h3>}
        </div>
      ) : (
        <>
          <h1>Welcome</h1>
          <button onClick={handleLogOut}>Logout</button>

          <div className="bungkus1">
            {listData?.map((item) => (
              <div key={item.email} className="bungkus">
                <h2>{item.first_name}</h2>
                <h2>{item.email}</h2>
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default App;
