const marginTop = {
    marginTop: "20px",
}
class Addmeal extends React.Component {
    state = {
        mealName: "",
        mealRecepy:"",
        mealProducts: {
            product1:"",
            product2:"",
            product3:"",
            product4:"",
            product5:"",
        }
    }
    formPost = () => {
        let meaName = this.state.mealName;
        let mealRecepy = this.state.mealRecepy;
        let mealProducts = {
            product1: this.state.product1,
            product2: this.state.product2,
            product3: this.state.product3,
            product4: this.state.product4,
            product5: this.state.product5,
        }
    try{
        let result = fetch('/account/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                meaName,
                mealRecepy,
                mealProducts,
            })
        });
        console.log('Result:' + result);
    } catch(e){
    }
}

    handleMeal = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    render(){
        return(
            <>
            <div id="wrapper"></div>
            <div class="add">
                <div class="close-button" onClick={this.props.handleCloseButton}>&#10006;</div>
                <div class="add-name">Utwórz potrawę</div>
                <form class="add-form">
                    <div class="add-form-child">
                        <input class="form-styling" type="text" onChange={this.handleMeal} name="mealName" placeholder="Nazwa"></input><br/>
                        <button id="login-button" type="button">+ Produkt</button><br/>
                        <textarea rows="15" cols="40" class="long-text-styling" onChange={this.handleMeal} name="mealRecepy" placeholder="Miejsce na przepis"></textarea><br/>
                        <button id="login-button" onClick={this.formPost} type="button">Utwórz</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}