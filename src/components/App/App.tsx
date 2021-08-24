import classes from './App.module.css';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";

function App() {
  return (
    <div className={classes.main_wrapper}>
        <Header />
        <Navbar />
        <Profile />
    </div>
  );
}

export default App;
