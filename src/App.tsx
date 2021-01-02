import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Home, About, TerminalPage} from "./pages";
import {Sidebar, Header} from "./components";

import './styles/Site.css'

function App() {
    const [sidebarStatus, setSidebarStatus] = useState<boolean>(false);

    return (
        <BrowserRouter>
            <div className={"site"}>
                <Route path={"/"}>
                    <Header toggleSidebar={() => {
                        setSidebarStatus(!sidebarStatus)
                    }}/>
                </Route>
                <div className={"page-container"}>
                    {sidebarStatus ? <Route path={"/"} component={Sidebar}/> : <div className={'no-sidebar'}/>}
                    <div className={"body"}>
                        <Route exact path="/">
                            <Home name={"shane"}/>
                        </Route>
                        <Route path="/about/">
                            <About/>
                        </Route>
                        <Route path="/filesystem/">
                            <TerminalPage prog_name="fsystem"/>
                        </Route>
                        <Route path="/projects/bash/">
                            <TerminalPage prog_name="bash"/>
                        </Route>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
