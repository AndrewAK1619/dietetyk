const marginTop = {
    marginTop: "20px",
}
class AddPatient extends React.Component {
    state = {
        
    }
    render(){
        return(
            <>
            <div id="wrapper"></div>
            <div class="add">
                <div class="close-button" onClick={this.props.handleCloseButton}>&#10006;</div>
                <div class="add-name">Dodaj nowego pacjenta</div>
                <form class="add-form">
                    <div class="add-form-child">
                        <input class="form-styling" type="text" placeholder="Imię"></input><br/>
                        <input class="form-styling" type="text" placeholder="Nazwisko"></input><br/>
                        <input class="form-styling" type="text" placeholder="E-mail"></input><br/>
                        <input class="form-styling" type="text" placeholder="Waga"></input><br/>
                        <input class="form-styling" type="text" placeholder="Wzrost"></input><br/>
                        <input class="form-styling" type="text" placeholder="Wiek"></input><br/>
                        <input style={marginTop} type="radio" id="male" name="gender" value="male"></input>
                         <label for="male">Mężczyzna</label>
                         <input type="radio" id="female" name="gender" value="female"></input>
                         <label for="female">Kobieta</label>      
                        <select class="select-styling">
                            <option>Aktywność fizyczna</option>
                            <option>Słaba</option>
                            <option>Umiarkowana</option>
                            <option>Częsta</option>
                        </select><br/>
                        <button id="login-button" type="button">Dodaj</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}