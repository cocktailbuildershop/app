import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import ForgotPassWord from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import React from "react";
//import Container from "@material-ui/core/Container";
import Auth from "./components/Auth";
import Demo from "./components/Demo";


function App() {
	return (
		/*<Container
			style={{ padding: "30px", backgroundColor: "#cfe8fc", width: "500px" }}
		>*/
		<BrowserRouter>
			<Auth>
				<Routes>
					<Route exact path="/" element={<Demo/>} />
					<Route path="/update-profile" element={<UpdateProfile />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/forgot-password" element={<ForgotPassWord />} />
				</Routes>
			</Auth>
		</BrowserRouter>
		/*</Container>*/
	);
}

export default App;
