import React from 'react'

const Profile = () => {
  return (
    <section id="profile" class="content-section">
        <h2 class="section-title">Profile Settings</h2>
        <p class="section-subtitle">Update your personal information</p>

        <form>
            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">First Name</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="form-group">
                    <label class="form-label">Last Name</label>
                    <input type="text" class="form-control"/>
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">Email Address</label>
                <input type="email" class="form-control"/>
            </div>

            <div class="form-group">
                <label class="form-label">Phone Number</label>
                <input type="tel" class="form-control" />
            </div>

            <div class="form-group">
                <label class="form-label">Date of Birth</label>
                <input type="date" class="form-control"/>
            </div>

            <div class="form-group">
                <label class="form-label">Gender</label>
                <select class="form-control">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            </div>

            <button type="submit" class="btn-primary">Save Changes</button>
            <button type="button" class="btn-secondary">Cancel</button>
        </form>
    </section>
  )
}

export default Profile