const marginTop = {
    marginTop: "20px",
}
class Addproduct extends React.Component {
    state = {
        
    }
    render(){
        return(
            <>
            <div id="wrapper"></div>
            <div class="add">
                <div class="close-button" onClick={this.props.handleCloseButton}>&#10006;</div>
                <div class="add-name">Dodaj nowy produkt</div>
                <form class="add-form">
                    <div class="add-form-child">
                        <input class="form-styling" type="text" placeholder="Nazwa"></input><br/>
                        <button id="login-button" type="button">Utwórz</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}