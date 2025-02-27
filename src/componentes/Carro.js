import React  from "react";



export default class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo='HRV'
        this.state={
            ligado:true,
            velAtual:0,
        }
            this.ld=this.ligarDesligar.bind(this)
    }
    ligarDesligar(){
      //  this.state.ligado=true
     // this.setState({ligado:!this.state.ligado})
    this.setState(
        (state)=>(
            {ligado:!state.ligado}
        )
        )
    }
        acelerar(){
            this.setState(
                (state,props)=>(
                {velAtual:state.velAtual + props.fator}
                )
            )
        }
    

    //     this.setState(
    //         function (state){
    //         return   {ligado:!state.ligado}
    //         }
    //         )
    // }
render(){
    return(
        <div>
   <h1> Meu Carro</h1>
    <p> Modelo:{this.modelo}</p>
    <p> Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
    <p> Velocidade: {this.state.velAtual}</p>
        <button onClick={this.ld}>
           {this.state.ligado? 'Desligar' : 'Ligar'} 
             </button>
             <button onClick={()=>this.acelerar()}>
           acelerar
             </button>

        </div>
    )
}

}
