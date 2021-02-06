const marginTop = {
    marginTop: "20px",
}
class Addproduct extends React.Component {
    state = {
        newProductCal:"",
        newProductProteins:"",
        newProductFat:"",
        newProductCarbs:"",
        units: "",
        productName: "",
    }
    handleProducts = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    formPost = () => {
        let kcal = this.state.newProductCal;
        let protein = this.state.newProductProteins;
        let carbohydrate = this.state.newProductCarbs;
        let fats = this.state.newProductFat;
    try{
        let result = fetch('/admin/products', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                newProductCal,
                newProductCarbs,
                newProductProteins,
                newProductFat
            })
        });
        console.log('Result:' + result);
    } catch(e){
    }
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
                        <input class="form-styling" type="text" onChange={this.handleProducts} name="productName" placeholder="Nazwa"></input><br/>
                        <input class="form-styling" type="text" onChange={this.handleProducts} name="newProductCal" placeholder="Kaloryczność"></input><br/>
                        <input class="form-styling" type="text" onChange={this.handleProducts} name="newProductProteins" placeholder="Białka"></input><br/>
                        <input class="form-styling" type="text" onChange={this.handleProducts} name="newProductFat" placeholder="Tłuszcze"></input><br/>
                        <input class="form-styling" type="text" onChange={this.handleProducts} name="newProductCarbs" placeholder="Węglowodany"></input><br/>
                        <input class="form-styling" type="text" onChange={this.handleProducts} name="units" placeholder="Podstawowa jednostka miary"></input><br/>
                        <button id="login-button" onClick={this.formPost} type="button">Utwórz</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}