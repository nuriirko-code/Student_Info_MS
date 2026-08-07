import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <i className="fas fa-graduation-cap"></i>
          <h2>SIMS Login</h2>
        </div>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Enter username" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>
          <div className="form-group">
            <label>Login As</label>
            <select>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
            </select>
          </div>
          {/*<button type="submit" className="btn-login-submit">Login</button> */}
          <Link to="/dashboard" className="btn-login-submit" style={{ display: 'block', textAlign: 'center' }}>Login</Link>

        </form>
        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Login;