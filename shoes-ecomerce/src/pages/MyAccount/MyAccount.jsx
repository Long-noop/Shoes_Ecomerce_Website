import React, { use, useState } from 'react'
import './MyAccount.scss'
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import { uploadImage } from '../../services/uploadService';
import { userService } from '../../services/userService';

const MyAccount = () => {

    const {logout, user, updateUser} = useAuth();
    const navigate = useNavigate();
    const [imagePreview, setImagePreview] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleLogout = async () => {
        await logout();
        navigate("/login", { replace: true });
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        if (!validTypes.includes(file.type)) {
            alert('Please select a valid image file');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert('File size must be less than 5MB');
            return;
        }

        setImageFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
        }

        await handleAvatarUpload(file);
    };

    const handleAvatarUpload = async (file) => {
        if (!file) return;

        setUploading(true);
        try {
            const result = await uploadImage(file, {
                folder: 'kicks/avatar',
                maxWidth: 1200,
                maxHeight: 800,
                onProgress: (progress) => setUploadProgress(progress),
            });

            if (result.success) {
                const response = await userService.updateProfile(user.id, {
                    avatar: result.url
                });
                if (response.success) {
                    updateUser(response.data);
                    setMessage({ type: 'success', text: 'Avatar updated successfully!' });
                    setTimeout(() => setMessage(null), 3000);
                }
            }
        } catch (error) {
            throw new Error('Failed to upload image: ' + error.message);
        } finally {
            setUploading(false);
            setUploadProgress(0);
        }
    };

  return (
    <div className="account-container user-account">
        <div className="account-grid">
            <aside className="account-sidebar">
                <div className="user-profile">
                    <label htmlFor="avatarUpload" className="user-avatar">
                        <img
                            src={imagePreview || user?.avatar}
                            alt="avatar"
                            className="profile-avatar-img"
                        />
                        <div className="avatar-upload">
                            <i className="fas fa-camera" style={{ color: "white", fontSize:"1rem" }}></i>
                            <input 
                                type="file" 
                                id="avatarUpload" 
                                style={{display: "none"}} 
                                accept="image/jpeg,image/jpg,image/png,image/webp" 
                                onChange={handleImageChange}
                                disabled={uploading}
                            />
                        </div>
                    </label>
                    {uploading && (
                        <div className="upload-progress">
                            <i className="fas fa-spinner fa-spin" style={{ color: "#000000"}}></i>
                            <span>{uploadProgress}%</span>
                        </div>
                    )}
                    <h3 className="user-name">{user?.name}</h3>
                    <p className="user-email">{user?.email}</p>
                </div>

                <ul className="sidebar-menu">
                    <li className="menu-item">
                        <NavLink className="menu-link" to="dashboard">
                            <i className="fas fa-home"></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink className="menu-link" to="profile">
                            <i className="fas fa-user"></i>
                            <span>Profile Settings</span>
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink className="menu-link" to="orders">
                            <i className="fas fa-shopping-bag"></i>
                            <span>My Orders</span>
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink className="menu-link" to="wishlist">
                            <i className="fas fa-heart"></i>
                            <span>Wishlist</span>
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink className="menu-link" to="addresses">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Addresses</span>
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink className="menu-link" to="security">
                            <i className="fas fa-lock"></i>
                            <span>Security</span>
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <div onClick={handleLogout} className="menu-link logout">
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                        </div>
                    </li>
                </ul>
            </aside>

            <main className='account-content'>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default MyAccount