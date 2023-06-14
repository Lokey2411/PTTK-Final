import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import QuanLy from "./components/QuanLy";
import NhanVien from "./components/NhanVien";
import Doing from "./components/Doing/Doing";
import Completed from "./components/Completed/Completed";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					exact
					element={<LoginForm />}></Route>
				<Route
					path="/QuanLy"
					exact
					element={<QuanLy />}></Route>
				<Route
					path="/NhanVien"
					exact
					element={<NhanVien />}></Route>
				<Route
					path="/DangLam"
					exact
					element={<Doing />}></Route>
				<Route
					path="/HoanThanh"
					exact
					element={<Completed />}></Route>
			</Routes>
		</Router>
	);
};

export default App;
