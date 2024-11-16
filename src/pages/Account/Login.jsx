import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const validEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

function Login() {
    const [Login, setIsLogin] = useState(true);
    const [formError, setFormError] = useState(null)
    const [loginErro, setLoginErro] = useState(null)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [cadastroNome, setCadastroNome] = useState('')
    const [cadastroEmail, setCadastroEmail] = useState('')
    const [cadastroSenha, setCadastroSenha] = useState('')
    const [cadastroConfirmaSenha, setCadastroConfirmaSenha] = useState('')
    const navigate = useNavigate()

    const handleToggle = () => {
        setIsLogin(!Login);
    };

    const handleCadastro = async () => {

        if(!validEmail(cadastroEmail)){
            setFormError("Email invalida")
            return null
        }

        if(cadastroSenha == ""){
            setFormError("Senha invalida")
            return null
        }

        if(cadastroSenha != cadastroConfirmaSenha){
            setFormError("Senhas não conferem")
            return null
        }

        const dados = {
            name: cadastroNome,
            email: cadastroEmail,
            password: cadastroSenha,
            score: 100
        };

        await fetch("https://67354f925995834c8a926889.mockapi.io/api/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados),
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                localStorage.setItem("ecoScoreUserId", data.id)
                navigate(0)
            }).catch(error => {
                console.error(error)
            })
    }

    const handleLogin = async () => {
        await fetch("https://67354f925995834c8a926889.mockapi.io/api/users")
            .then(response => response.json())
            .then(data => {
                const user = data.find(x => x.email == loginEmail && x.password == loginPassword)
                if (user != undefined) {
                    localStorage.setItem("ecoScoreUserId", user.id)
                    navigate(0)
                } else {
                    setLoginErro('Usuario ou senha incorretos')
                }
            })
            .catch(erro => console.error(erro))
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md p-8  bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-4xl font-semibold text-center text-white mb-6">
                    {Login ? 'Login' : 'Cadastro'}
                </h2>

                {Login ? (
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite seu e-mail"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={loginEmail}
                                onChange={e => setLoginEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white">
                                Senha
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Digite sua senha"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                                value={loginPassword}
                                onChange={e => setLoginPassword(e.target.value)}
                            />
                        </div>

                        <p className='text-sm text-red-700 text-center'>{loginErro}</p>

                        <div className="flex justify-between items-center">
                            <button
                                type="button"
                                className="w-full py-3 bg-eco-green text-white font-semibold rounded-mdfocus:outline-none focus:ring-2 rounded-lg"
                                onClick={handleLogin}
                            >
                                Entrar
                            </button>
                        </div>
                    </form>
                ) : (
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                Nome
                            </label>
                            <input
                                type="email"
                                id="nome"
                                placeholder="Nome"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={cadastroNome}
                                onChange={e => setCadastroNome(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="E-mail"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={cadastroEmail}
                                onChange={e => setCadastroEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white">
                                Senha
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Senha"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={cadastroSenha}
                                onChange={e => setCadastroSenha(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-white">
                                Confirmar Senha
                            </label>
                            <input
                                type="password"
                                id="confirm-password"
                                placeholder="Confirme sua senha"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
                                value={cadastroConfirmaSenha}
                                onChange={e => setCadastroConfirmaSenha(e.target.value)}
                            />
                        </div>

                        <p className='text-sm text-red-700 text-center'>{formError}</p>

                        <div className="flex justify-between items-center">
                            <button
                                type='button'
                                className="w-full py-3 bg-eco-green text-white font-semibold rounded-md focus:outline-none focus:ring-2"
                                onClick={handleCadastro}
                            >
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )}

                <div className="mt-4 text-center">
                    <button
                        onClick={handleToggle}
                        className="text-sm text-eco-green focus:outline-none"
                    >
                        {Login ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Entre'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
