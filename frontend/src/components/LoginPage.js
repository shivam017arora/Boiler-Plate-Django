import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../context";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const state = useContext(context);

  return (
    <div className="container m-2 p-2">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="email"
            className="form-control"
            id="emailID"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordID"
            aria-describedby="emailHelp"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary mt-2"
            onClick={async () => {
              await state.login(username, password);
              navigate("/");
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
