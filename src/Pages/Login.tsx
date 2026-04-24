import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Login.css';
import { login, logout } from '../Redux/slice/authSlice.tsx';
import type { RootState } from '../Redux/store/Store.tsx';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: number;
    name: string;
    email: string;
  };
  token: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('Form submitted with:', formData);
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      // Simulate API call
      const response = await new Promise<LoginResponse>((resolve) => {
        setTimeout(() => {
          resolve({
            user: {
              id: 1,
              name: 'John Doe',
              email: formData.email
            },
            token: 'mock-jwt-token'
          });
        }, 1000);
      });

      dispatch(login(response));
      console.log('Login successful:', response);
      setFormData({ email: '', password: '' });
    } catch {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">

        {!isLoggedIn ? (
          <>
            <h2>Login</h2>

            {error && <div className="error">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </>
        ) : (
          <div>
            <h2>Welcome</h2>
            <p>{user?.email}</p>

            <button onClick={() => dispatch(logout())}>
              Logout
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Login;