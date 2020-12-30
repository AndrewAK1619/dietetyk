class Admin extends React.Component {
    state = {
        settings: false,
    }
    handleSettingsOpen = () => {
        this.setState({
            settings: !this.state.settings,
        })
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
                            <li>Nowy pacjent</li>
                            <li>Nowy jadłospis</li>
                            <li>Nowy potrawa</li>
                            <li>Nowy produkt</li>
                        </ul>
                </div>
                <div id="main-panel">
                    <header>
                        <div id="app-name">
                            <span>e-DIETETYK</span>
                        </div>
                        <div id="user-data">
                            <img src="img/userimage.jpg"></img>
                        </div>
                        <div id="settings-panel">
                            <span onClick={this.handleSettingsOpen}>USTAWIENIA</span>
                        </div>
                        
                    </header>
                    {this.state.settings == false ? <div></div> : <div id="settings-popup">
                        <ul id="settings-menu">
                            <li>Konto</li>
                            <li>Diety</li>
                            <li>Wyloguj</li>
                        </ul>
                    </div>}
                    
                    <div id="working-tiles">
                            <div class="tiles">
                                <div class="tile-name">Pacjenci</div>
                                <div class="work-data">

                                </div>
                            </div>
                            <div class="tiles">
                                <div class="tile-name">Jadłospisy</div>
                            </div>
                            <div class="tiles">
                                <div class="tile-name">Potrawy</div>
                            </div>
                            <div class="tiles">
                                <div class="tile-name">Produkty</div>
                            </div>
                        </div>
                </div>
            </div>
            </>
        )
    }
}