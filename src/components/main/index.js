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
                        <h1>Ola Jonatas!</h1>
                        <p>Bem-vindo ao seu painel</p>
                    </div>
                </div>

                <div className="main-cards">
                    <div className="card">
                        <i className="fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Numero de padidos</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-money fa-2x text-red"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Pagamentos</p>
                            <span className="font-bold text-title">R$550,00</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-archive fa-2x text-yellow"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Numero de produtos</p>
                            <span className="font-bold text-title">670</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-bars fa-2x text-green"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Categorias</p>
                            <span className="font-bold text-title">40</span>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts-left">
                        <div className="charts-left-title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Sao Paulo, Sao Paulo, BR</p>
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
                                <h1>Lucro</h1>
                                <p>R$ 4.000,00</p>
                            </div>

                            <div className="card2">
                                <h1>Pagamentos</h1>
                                <p>R$ 250,00</p>
                            </div>

                            <div className="card3">
                                <h1>Custo de hospedagem</h1>
                                <p>R$ 150,00</p>
                            </div>

                            <div className="card4">
                                <h1>Banco de dados</h1>
                                <p>R$ 400,00</p>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </main>
    )
}

export default Main;