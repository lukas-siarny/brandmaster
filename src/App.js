import "./styles/css/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header";
import SideMenu from "./components/Sidemenu";
import CustomerOverview from "./components/CustomerOverview";
import Reports from "./components/Reports";
import FileTranscodings from "./components/FileTranscodings";
import NotificationsCenter from "./components/NotificationsCenter";

function App() {
  return (
    <Router>
        <Header />
        <div className="site-wrapper">
            <SideMenu />
            <main className="main">
                <div className="main__wrapper">
                    <Switch>
                        <Route exact path="/" component={CustomerOverview} />  
                        <Route exact path="/reports" component={Reports} />  
                        <Route exact path="/file-transcodings" component={FileTranscodings} />  
                        <Route exact path="/notifications-center" component={NotificationsCenter} />    
                    </Switch>
                </div>    
            </main>
        </div>
    </Router>
  );
}

export default App;
