import React from 'react';
import { render } from '@testing-library/react';

import { Register } from './src/Component/Register.js';
import { Login } from './src/Component/Login.js';
import { Dashboardngo } from './src/Component/Dashboardngo.js';
import { Dashboarduser } from './src/Component/Dashboarduser.js';
import { ForgotPassword } from './src/Component/forgotpassword.js';

test("render the correct component on Register page", ()=> {
 const { getByText, getByLabelText } = render(<Register />);
 getByText("NGO-Donation Application");
 getByLabelText("Register as a User");
 getByLabelText("Register as a NGO's");
})






test("render the correct component on Login page", ()=> {
 const { getByText, getByLabelText } = render(<Login />);
 getByText("NGO-Donation Application");
 getByText("Login");
})







test("render the correct component on Register page", ()=> {
 const { getByText, getByLabelText } = render(<Dashboardngo />);
 getByText("NGO-Donation Application");
 getByLabelText("Create New Project");
 getByLabelText("Show project raised by you");
 getByLabelText("LOGOUT");
})




test("render the correct component on Register page", ()=> {
 const { getByText, getByLabelText } = render(<Dashboarduser />);
 getByText("NGO-Donation Application");
 getByLabelText("Show all projects");
 getByLabelText("Show all donations raised by you");
 getByLabelText("LOGOUT");
})
