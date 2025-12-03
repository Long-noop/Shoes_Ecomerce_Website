import React, { useEffect, useState } from 'react'
import {useAuth} from '../../contexts/AuthContext'
import { userService } from '../../services/userService';

const Profile = () => {
    const { user, updateUser } = useAuth();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        date_of_birth: '',
        gender: '',
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    
    useEffect(() => {
        if (user) {
        setFormData({
            first_name: user.first_name || '',
            last_name: user.last_name || '',
            email: user.email || '',
            phone: user.phone || '',
            date_of_birth: user.date_of_birth || '',
            gender: user.gender || '',
        });
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
        setMessage({ type: '', text: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
        const response = await userService.updateProfile(user.id, formData);
        if (response.success) {
            updateUser(response.data);
            setMessage({ type: 'success', text: 'Profile updated successfully!' });
        }
        } catch (error) {
        setMessage({ type: 'danger', text: error.message || 'Failed to update profile' });
        } finally {
        setLoading(false);
        }
    };
  return (
    <section id="profile" className="content-section">
        <h2 className="section-title">Profile Settings</h2>
        <p className="section-subtitle">Update your personal information</p>

        {message.text && (
            <div className={`alert alert-${message.type}`} role="alert">
            {message.text}
            </div>
        )}
        
        <form onSubmit={handleSubmit}>
            <div className="form-grid">
                <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input type="text" 
                    className="form-control"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label className="form-label">Gender</label>
                <select
                  className="form-select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
            </div>

            <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'Updating...' : 'Save Changes'}
            </button>
            <button type="button" className="btn-secondary"
                onClick={()=> {
                    setFormData({
                        first_name: user.first_name || '',
                        last_name: user.last_name || '',
                        email: user.email || '',
                        phone: user.phone || '',
                        date_of_birth: user.date_of_birth || '',
                        gender: user.gender || '',
                    })
                }}>
                Cancel
            </button>
        </form>
    </section>
  )
}

export default Profile