import './index.css';

import hello from '../../assets/office.jpg';
import Chart from '../charts/index';

const Main = () => {
    return (
        <main>
            <div className="main-container">
                <div className="main-title">
                    <img src={hello} alt="office" />
                    <div className="main-greeting">
                        <h1>Olá Jonatas!</h1>
                        <p>Bem-vindo ao seu painel</p>
                    </div>
                </div>

                <div className="main-cards">
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-title">
                                <i className="fa fa-file-text fa-2x text-lightblue"></i>
                            </div>
                            <div className="card-content">
                                <p className="text-primary-p">Número de funcionários</p>        
                                <span className="font-bold text-title">578</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <div className="card-title">
                                <i className="fa fa-money fa-2x text-red"></i>
                            </div>
                            <div className="card-content">
                                <p className="text-primary-p">Folha de pagamento</p>
                                <span className="font-bold text-title">R$ 1.455.000,00</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <div className="card-title">
                                <i className="fa fa-archive fa-2x text-yellow"></i>
                            </div>
                            <div className="card-content">
                                <p className="text-primary-p">Encargos</p>
                                <span className="font-bold text-title">R$ 218.000,00</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <div className="card-title">
                                <i className="fa fa-bars fa-2x text-green"></i>
                            </div>
                            <div className="card-content">
                                <p className="text-primary-p">Filiais</p>
                                <span className="font-bold text-title">20</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts-left">
                        <div className="charts-left-title">
                            <div>
                                <h1>Folha de Pagamento</h1>
                                <p>Filial: São Paulo, SP</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts-right">
                        <div className="charts-right-title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Sao Paulo, Sao Paulo, BR</p>
                            </div>
                            <i className="fa fa-area-chart"></i>
                        </div>
                        
                        <div className="charts-right-cards">
                            <div className="card1">
                                <h1>Funcionários de férias</h1>
                                <p>15</p>
                            </div>

                            <div className="card2">
                                <h1>Vale-alimentação</h1>
                                <p>R$ 80.050,00</p>
                            </div>

                            <div className="card3">
                                <h1>Reembolsos</h1>
                                <p>R$ 15.000,00</p>
                            </div>

                            <div className="card4">
                                <h1>Banco de horas</h1>
                                <p> 400 Horas</p>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </main>
    )
}

export default Main;