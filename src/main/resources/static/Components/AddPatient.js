const marginTop = {
    marginTop: "20px",
}
class AddPatient extends React.Component {
    state = {
        patientName:"",
        patientSurname:"",
        patientEmail:"",
        patientWeight:"",
        patientHeight: "",
        patientOld: "",
        patientSex:"",
        physicalActivity: "",
    }
    formPost = () => {
        let patientName = this.state.patientName;
        let patientSurname = this.state.patientSurname;
        let patientEmail = this.state.patientEmail;
        let patientWeight = this.state.patientWeight;
        let patientHeight = this.state.patientHeight;
        let patientOld = this.state.patientOld;
        let patientSex = this.state.patientSex;
        let physicalActivity = this.state.physicalActivity;

    try{
        let result = fetch('/account/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                patientName,
                patientSurname,
                patientEmail,
                patientWeight,
                patientHeight,
                patientOld,
                patientSex,
                physicalActivity,
            })
        });
        console.log('Result:' + result);
    } catch(e){
    }
}
    handleForm = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    handleSelect = (e) => {
        this.setState({
            physicalActivity:e.target.value,
        })
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
                        <input class="form-styling" onChange={this.handleForm} type="text" name="patientName" placeholder="Imię"></input><br/>
                        <input class="form-styling" onChange={this.handleForm} type="text" name="patientSurname" placeholder="Nazwisko"></input><br/>
                        <input class="form-styling" onChange={this.handleForm} type="text" name="patientEmail" placeholder="E-mail"></input><br/>
                        <input class="form-styling" onChange={this.handleForm} type="text" name="patientWeight" placeholder="Waga"></input><br/>
                        <input class="form-styling" onChange={this.handleForm} type="text" name="patientHeight" placeholder="Wzrost"></input><br/>
                        <input class="form-styling" onChange={this.handleForm} type="text" name="patientOld" placeholder="Wiek"></input><br/>
                        <input style={marginTop} type="radio" onChange={this.handleForm} id="male" name="patientSex" value="mężczyzna"></input>
                         <label for="male">Mężczyzna</label>
                         <input type="radio" onChange={this.handleForm} id="female" name="patientSex" value="kobieta"></input>
                         <label for="female">Kobieta</label>      
                        <select onChange={this.handleSelect} class="select-styling">
                            <option value="Aktywność fizyczna">Aktywność fizyczna</option>
                            <option value="Słaba">Słaba</option>
                            <option value="Umiarkowana">Umiarkowana</option>
                            <option value="Częsta">Częsta</option>
                        </select><br/>
                        <button id="login-button" onClick={this.formPost} type="button">Dodaj</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}