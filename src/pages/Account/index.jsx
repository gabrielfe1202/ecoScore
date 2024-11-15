import { useState, useEffect } from 'react';
import EnergyChart from "./energyChart";
import cupons from '../../assets/cupons.json'
import logo from "../../assets/ecoScore.png"
import Login from './Login';
import Loading from '../../Components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Se o modal não estiver aberto, não renderiza nada

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-1/3">
                <div className="flex justify-center items-center flex-col">{children}</div>
            </div>
        </div>
    );
};

export default function Account() {
    const [stateLoad, setStateLoad] = useState(false)
    const [userData, setUserData] = useState(null);
    const [energyData, setEnergyData] = useState([]);
    const [groupBy, setGroupBy] = useState('month');
    const [logado, setLogaado] = useState(false)
    const [modalCupom, setModalCupom] = useState(false);
    const [modalErro, setModalErro] = useState(false)
    const [cupomCodigo, setCupomCodigo] = useState('')

    const toggleModalCupom = () => {
        setModalCupom(!modalCupom);
    };

    const toggleModalErro = () => {
        setModalErro(!modalErro);
    };

    const fetchhUserData = async () => {
        setStateLoad(true)
        const userId = localStorage.getItem("ecoScoreUserId")
        await fetch(`https://67354f925995834c8a926889.mockapi.io/api/users/${userId}`)
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error(error))
            .finally(() => setStateLoad(false))
    }

    useEffect(() => {
        setUserData({
            name: 'João Silva',
            points: 1200,
        });

        setEnergyData([
            { date: '2024-01-01', energy: 25 },
            { date: '2024-01-15', energy: 30 },
            { date: '2024-02-01', energy: 22 },
            { date: '2024-02-20', energy: 28 },
            { date: '2024-03-10', energy: 20 },
            { date: '2024-03-18', energy: 27 },
            { date: '2025-01-02', energy: 18 },
            { date: '2025-05-18', energy: 35 },
            { date: '2025-11-11', energy: 40 },
        ]);

        const userId = localStorage.getItem("ecoScoreUserId")
        if (userId != null & userId != undefined) {
            setLogaado(true)
            fetchhUserData()
        }
    }, []);

    const handleGroupChange = (event) => {
        setGroupBy(event.target.value);
    };

    const handleLogout = () => {
        localStorage.removeItem("ecoScoreUserId")
        window.location.reload()
    }

    const handleCupom = async (preco, codigo) => {
        if (preco > userData.score) {
            toggleModalErro()
        } else {
            setCupomCodigo(codigo)
            const datauser = userData
            datauser.score -= preco

            await fetch(`https://67354f925995834c8a926889.mockapi.io/api/users/${userData.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datauser),
            }).then(response => response.json())
                .then(data => {
                    console.log(data)
                }).catch(error => {
                    console.error(error)
                })
                
            setUserData(datauser)
            toggleModalCupom()
        }
    }

    if (stateLoad) return <Loading />

    if (!logado) return <Login />

    return (
        <>
            <div className="text-white justify-center items-center py-12 flex flex-row gap-10 flex-wrap">

                <div className='w-10/12 flex flex-row justify-between items-center'>
                    <div className='w-1/12'></div>
                    <Link to="/">
                        <img src={logo} className='h-[110px]' />
                    </Link>
                    <div className='w-1/12'>
                        <button className='text-2xl' onClick={handleLogout}>
                            <FontAwesomeIcon icon={faSignOutAlt} /> Sair
                        </button>
                    </div>
                </div>

                <div className="w-10/12 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-row flex-wrap justify-between items-center">
                    <h1 className="text-3xl font-semibold text-center font-mono">Bem vindo, {userData.name}</h1>
                    <hi className="text-xl font-semibold text-center">Você possui:<b className='text-3xl ml-5'>{userData.score} EcoCoins</b></hi>
                </div>

                <div className="w-full max-w-3xl p-6 bg-gray-800 rounded-lg shadow-lg flex-row flex-wrap justify-between items-center hidden md:flex">
                    <h1 className="text-3xl font-semibold text-center mb-8 font-mono">Pontos gerados</h1>

                    <div className="mb-6">
                        <select
                            id="groupBy"
                            value={groupBy}
                            onChange={handleGroupChange}
                            className="ml-2 p-2 bg-gray-700 text-white rounded-md"
                        >
                            <option value="month">Por mês</option>
                            <option value="year">Por ano</option>
                        </select>
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        <EnergyChart data={energyData} groupBy={groupBy} />
                    </div>
                </div>

                <div className="w-full max-w-3xl p-6 bg-gray-800 rounded-lg shadow-lg flex-row flex-wrap justify-between items-center hidden md:flex">
                    <h1 className="text-3xl font-semibold text-center mb-8 font-mono">Consumo de energia</h1>

                    <div className="mb-6">
                        <select
                            id="groupBy"
                            value={groupBy}
                            onChange={handleGroupChange}
                            className="ml-2 p-2 bg-gray-700 text-white rounded-md"
                        >
                            <option value="month">Por mês</option>
                            <option value="year">Por ano</option>
                        </select>
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        <EnergyChart data={energyData} groupBy={groupBy} />
                    </div>
                </div>

                <div className="w-10/12 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-row flex-wrap justify-between items-center">
                    <h1 className="text-3xl font-semibold text-center mb-8 font-mono">Cupons para resgatar</h1>
                    <div className='w-full flex flex-col gap-5'>
                        {cupons.map(item => (
                            <div className='px-8 py-5 border-white border rounded-lg flex justify-between items-center flex-wrap'>
                                <div className='flex gap-4 items-center'>
                                    <div className='w-16 h-16 bg-white rounded-full flex justify-center items-center'>
                                        <img src={item.imagem} className='w-8/12' />
                                    </div>
                                    <div>
                                        <p className='text-lg font-mono font-bold'>
                                            {item.descricao}
                                        </p>
                                        <p className='text-lg'>
                                            Por: {item.preco} ecoCoins
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className='px-4 py-2 bg-eco-green rounded-md'
                                    onClick={() => handleCupom(item.preco, item.codigo)}
                                >
                                    Resgatar
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <Modal isOpen={modalCupom} onClose={toggleModalCupom}>
                <h2 className="text-xl font-semibold mb-4">Parabens!</h2>
                <p className="text-gray-700">Utilize o codigo do cupom abaixo para ter acesso à promoção</p>
                <p className='bg-gray-300 w-fit px-9 py-2 mt-5'>{cupomCodigo}</p>
                <button
                    onClick={toggleModalCupom}
                    className="mt-4 px-6 py-2 bg-eco-green text-white rounded-lg"
                >
                    Fechar
                </button>
            </Modal>

            <Modal isOpen={modalErro} onClose={toggleModalErro}>
                <h2 className="text-xl font-semibold mb-4">Erro ao resgatar cupom</h2>
                <p className="text-gray-700">Você não possui ecoCoins suficientes para este cupom.</p>
                <button
                    onClick={toggleModalErro}
                    className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg"
                >
                    Fechar
                </button>
            </Modal>

        </>
    );
}