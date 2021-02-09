class Accountsettings extends React.Component{
    render(){
        return(
            <>
                <div id="who-for">
                <span>KONTO</span>
                <div id="empty-space">
                    </div>
                    <button id="save-button" type="button">Zapisz</button>
                    <div class="close-button" onClick={this.props.handleCloseButton}>&#10006;</div>
                </div>
                <div id="row">
                    <div class="settings">
                        ZDJĘCIE PROFILOWE
                    </div>
                    <div class="settings"></div>
                    <div class="settings"></div>
                </div>
            </>
        );
    }
}