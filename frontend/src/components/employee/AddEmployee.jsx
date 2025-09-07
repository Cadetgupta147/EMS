import React from "react";

const AddEmployee = ({ handleChange, handleSubmit }) => {
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-gray-100 p-6 rounded-md shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Add New Employee</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Insert Name"
              className="border mt-1 p-2 rounded w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Insert Email"
              className="border mt-1 p-2 rounded w-full"
            />
          </div>

          {/* Employee ID */}
          <div>
            <label htmlFor="emp_id" className="block text-sm font-medium text-gray-700">
              Employee ID
            </label>
            <input
              type="text"
              name="emp_id"
              onChange={handleChange}
              placeholder="Employee ID"
              className="border mt-1 p-2 rounded w-full"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              onChange={handleChange}
              className="border mt-1 p-2 rounded w-full"
            />
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              onChange={handleChange}
              className="border mt-1 p-2 rounded w-full"
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Marital Status */}
          <div>
            <label htmlFor="marital_status" className="block text-sm font-medium text-gray-700">
              Marital Status
            </label>
            <select
              name="marital_status"
              onChange={handleChange}
              className="border mt-1 p-2 rounded w-full"
            >
              <option>Select Status</option>
              <option>Single</option>
              <option>Married</option>
              <option>Divorced</option>
            </select>
          </div>

          {/* Designation */}
          <div>
            <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              onChange={handleChange}
              placeholder="Designation"
              className="border mt-1 p-2 rounded w-full"
            />
          </div>

          {/* Department */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <select
              name="department"
              onChange={handleChange}
              className="border mt-1 p-2 rounded w-full"
            >
              <option>Select Department</option>
              <option>IT</option>
              <option>HR</option>
              <option>Finance</option>
            </select>
          </div>

          {/* Salary */}
          <div>
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
              Salary
            </label>
            <input
              type="number"
              name="salary"
              onChange={handleChange}
              placeholder="Salary"
              className="border mt-1 p-2 rounded w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="******"
              className="border mt-1 p-2 rounded w-full"
            />
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              name="role"
              onChange={handleChange}
              className="border mt-1 p-2 rounded w-full"
            >
              <option>Select Role</option>
              <option>Admin</option>
              <option>Employee</option>
            </select>
          </div>

          {/* Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
                Upload Image
            </label>
            <input
                type="file"
                name="image"
                // onChange={handleChange}
                placeholder="Upload Image"
                accept="image/*"
                className="mt-1 p-2 block w-full border rounded-md" // optional minimal styling
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full mt-4 p-2 bg-gray-800 text-white rounded hover:bg-gray-500 transition"
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
