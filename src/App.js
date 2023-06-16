import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import QuanLy from "./components/QuanLy";
import NhanVien from "./components/NhanVien";
import Test from "./components/Home/Test";

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
					path="/Test"
					exact
					element={<Test />}></Route>
			</Routes>
		</Router>
	);
};

export default App;
