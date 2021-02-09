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
        medicine:"",
        alergies:"",
    }
    componentDidMount() {
        this.activitiesGet = () => {
            fetch("/admin/patients/activities/degree-of-activitties",{
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json;cahrset=utf-8',
                }
            }).then(function(response){
                console.log(response);
            })
        }
    }
    formPost = () => {
        let firstName = this.state.patientName;
        let lastName = this.state.patientSurname;
        let email = this.state.patientEmail;
        let bodyWeight = this.state.patientWeight;
        let height = this.state.patientHeight;
        let age = this.state.patientOld;
        let sex = this.state.patientSex;
        let degreeOfPhysicalActivity = this.state.physicalActivity;
        let chronicDiseasesAilmentsAndMedicinesUsed = this.state.medicine;
        let allergiesAndFoodIntolerances = this.state.alergies;

    try{
        let result = fetch('/admin/patients', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                bodyWeight,
                height,
                age,
                sex,
                degreeOfPhysicalActivity,
                chronicDiseasesAilmentsAndMedicinesUsed,
                allergiesAndFoodIntolerances,
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
                        <input class="form-styling" onChange={this.handleForm} type="text" name="patientName" placeholder="Imię"></input>
                        <input class="form-styling" onChange={this.handleForm} type="text" name="patientSurname" placeholder="Nazwisko"></input><br/>
                        <input class="form-styling" onChange={this.handleForm} type="text" name="patientEmail" placeholder="E-mail"></input>
                        <input class="form-styling" onChange={this.handleForm} type="text" name="patientWeight" placeholder="Waga"></input><br/>
                        <input class="form-styling" onChange={this.handleForm} type="text" name="patientHeight" placeholder="Wzrost"></input>
                        <input class="form-styling" onChange={this.handleForm} type="text" name="patientOld" placeholder="Wiek"></input><br/>
                        <input class="form-styling" onChange={this.handleForm} type="text" name="medicine" placeholder="Przyjmowane leki"></input>
                        <input class="form-styling" onChange={this.handleForm} type="text" name="alergies" placeholder="Alergie, choroby, nietolerancje"></input><br/>
                        <input style={marginTop} type="radio" onChange={this.handleForm} id="male" name="patientSex" value="mężczyzna"></input>
                         <label for="male">Mężczyzna</label>
                         <input type="radio" onChange={this.handleForm} id="female" name="patientSex" value="kobieta"></input>
                         <label for="female">Kobieta</label>      
                        <select onChange={this.handleSelect} class="select-styling">
                            <option value="1 - Pacjent leżący w łóżku">1 - Pacjent leżący w łóżku</option>
                            <option value="2 - Aktywność fizyczna niska">Słaba</option>
                            <option value="3 - Aktywność fizyczna umiarkowana">3 - Aktywność fizyczna umiarkowana</option>
                            <option value="4 - Aktywny tryb życia">4 - Aktywny tryb życia</option>
                            <option value="5 - Bardzo aktywny tryb życia">5 - Bardzo aktywny tryb życia</option>
                            <option value="6 - Wyczynowe uprawianie sportu">6 - Wyczynowe uprawianie sportu</option>
                        </select><br/>
                        <button id="login-button" onClick={this.formPost} type="button">Dodaj</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}