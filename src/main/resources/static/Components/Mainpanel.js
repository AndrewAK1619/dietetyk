class Mainpanel extends React.Component {
    constructor(props){
        super(props)
        this.handleCloseButton = this.handleCloseButton.bind(this)
    }
    handleCloseButton = () => {
        this.setState({
            whichwindow: "",
        })
    }
    state = {
        settings: false,
        newpatient: false,
        whichwindow: "",
    }
    handleSettingsOpen = () => {
        this.setState({
            settings: !this.state.settings,
        })
    }

    handleAdd = (e) => {
        this.setState({
            whichwindow: [e.target.id],
        })
    
    }
    logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }
    render(){
        return(
            <>
            <div id="father">
                <div id="side-menu">
                    <div id="logo">
                        <img src="img\e-dietetyk-logo.png" alt="e-Dietetyk"></img>
                    </div>
                        <ul class="side-menu">
                            <li onClick={this.handleAdd} id="newpatient">Nowy pacjent</li>
                            <li onClick={this.handleAdd} id="newmenu">Nowy jadłospis</li>
                            <li onClick={this.handleAdd} id="newmeal">Nowy potrawa</li>
                            <li onClick={this.handleAdd} id="newproduct">Nowy produkt</li>
                        </ul>
                </div>
                <div id="main-panel">
                    <header>
                        <div id="app-name">
                            <span>e-DIETETYK</span>
                        </div>
                        <div id="user-data">
                            <img src="img/user.png"></img>
                        </div>
                        <div id="settings-panel">
                            <span onClick={this.handleSettingsOpen}>USTAWIENIA</span>
                        </div>
                        
                    </header>
                    {this.state.settings == false ? <div></div> : <div id="settings-popup">
                        <ul id="settings-menu">
                            <li onClick={this.handleAdd} id="account">Konto</li>
                            <li>Diety</li>
                            <li onClick={this.logout}>Wyloguj</li>
                        </ul>
                    </div>}
                    {this.state.whichwindow == "account" ? <Accountsettings handleCloseButton={this.handleCloseButton}/> : <></>}
                    {this.state.whichwindow == "newpatient" ? <AddPatient handleCloseButton={this.handleCloseButton}/> : <></>}
                    {this.state.whichwindow == "newmeal" ? <Addmeal handleCloseButton={this.handleCloseButton}/> : <></>}
                    {this.state.whichwindow == "newmenu" ? <Addmenu handleCloseButton={this.handleCloseButton}/> : <></>}
                    {this.state.whichwindow == "newproduct" ? <Addproduct handleCloseButton={this.handleCloseButton}/> : <></>}
                    <div id="working-tiles">
                            <div class="tiles">
                                <div class="tile-name">Pacjenci</div>
                                <input class="form-styling" type="text" placeholder="Wyszukaj"></input><br/>
                                <div class="work-data">
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                </div>
                            </div>
                            <div class="tiles">
                                <div class="tile-name">Jadłospisy</div>
                                <input class="form-styling" type="text" placeholder="Wyszukaj"></input><br/>
                                <div class="work-data">
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                </div>
                            </div>
                            <div class="tiles">
                                <div class="tile-name">Potrawy</div>
                                <input class="form-styling" type="text" placeholder="Wyszukaj"></input><br/>
                                <div class="work-data">
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                </div>
                            </div>
                            <div class="tiles">
                                <div class="tile-name">Produkty</div>
                                <input class="form-styling" type="text" placeholder="Wyszukaj"></input><br/>
                                <div class="work-data">
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                    <span>Jan Kowalski</span><br/>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            </>
        )
    }
}