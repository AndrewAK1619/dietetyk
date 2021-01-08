class Admin extends React.Component {
    render(){
        return(
            <div id="admin">
                <div class="close-button" onClick={this.props.handleCloseButton}>&#10006;</div>
                <h1>Utwórz użytkownika</h1>
                <input class="admin-input-styling" type="text"></input>
                <input class="admin-input-styling" type="text"></input><br/>
                <input class="admin-input-styling" type="text"></input>
                <input class="admin-input-styling" type="text"></input><br/>
                <input class="admin-input-styling" type="text"></input>
                <input class="admin-input-styling" type="text"></input><br/>
                <button id="login-button" type="button">Utwórz</button>
            </div>
        )
    }
}