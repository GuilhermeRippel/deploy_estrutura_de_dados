import { Link } from "react-router-dom"
import logoCesuca from '../assets/logo_cesuca.webp'

function Main(){
    return(
        <div className="w-screen h-screen bg-gray-800 flex flex-col">
            <header className="w-full h-20 bg-gray-950 flex items-center justify-center">
                <img src={logoCesuca} alt="Logo Cesuca" className="w-36 absolute left-5"/>
                <h1 className="text-white font-bold text-3xl">Bem vindo á sua calculadora de formas geométricas</h1>
            </header>
            <main className="flex-grow w-full p-11 flex justify-around items-center">
                <div className="w-1/4 h-2/3 bg-gray-950 rounded-xl shadow-lg p-4 flex flex-col justify-around">
                    <div><h2 className="text-white font-bold text-center text-2xl">Quadrado e Retângulo</h2></div>
                    <div className="w-full h-1/2 py-5 flex flex-col justify-around gap-5">
                        <Link to="/Square" className="w-full h-2/4 bg-gray-800 rounded-md flex items-center justify-center text-white font-bold text-lg hover:bg-gray-900 transition-all duration-300"><button>Área do Quadrado</button></Link>
                        <Link to="/Retangle" className="w-full h-2/4 bg-gray-800 rounded-md flex items-center justify-center text-white font-bold text-lg hover:bg-gray-900 transition-all duration-300"><button>Área do Retângulo</button></Link>
                    </div>
                </div>
                <div className="w-1/4 h-2/3 bg-gray-950 rounded-xl shadow-lg p-4 flex flex-col justify-around">
                    <div><h2 className="text-white font-bold text-center text-2xl">Triângulo</h2></div>
                    <div className="w-full h-1/2 py-5 flex flex-col justify-around gap-5">
                        <Link to="/Triangle" className="w-full h-2/4 bg-gray-800 rounded-md flex items-center justify-center text-white font-bold text-lg hover:bg-gray-900 transition-all duration-300"><button>Área do Triângulo</button></Link>
                        <Link to="/Triangle2" className="w-full h-2/4 bg-gray-800 rounded-md flex items-center justify-center text-white font-bold text-lg hover:bg-gray-900 transition-all duration-300"><button>Perímetro do Triângulo</button></Link>
                    </div>
                </div>
                <div className="w-1/4 h-2/3 bg-gray-950 rounded-xl shadow-lg p-4 flex flex-col justify-around">
                    <div><h2 className="text-white font-bold text-center text-2xl">Círuclo</h2></div>
                    <div className="w-full h-1/2 py-5 flex flex-col justify-around gap-5">
                        <Link to="/Circle" className="w-full h-2/4 bg-gray-800 rounded-md flex items-center justify-center text-white font-bold text-lg hover:bg-gray-900 transition-all duration-300"><button>Raio do Círculo</button></Link>
                        <Link to="/Circle2" className="w-full h-2/4 bg-gray-800 rounded-md flex items-center justify-center text-white font-bold text-lg hover:bg-gray-900 transition-all duration-300"><button>Circunferência Círculo</button></Link>
                    </div>
                </div>
            </main>
            <footer className="w-full h-10 bg-gray-950 flex items-center justify-center overflow-hidden">
                <p className="text-lg text-gray-500 font-bold whitespace-nowrap animate-marquee">
                    Nome dos Integrantes: <span className="text-white font-bold mr-2">Everson Lobato, Guilherme Rippel Moraes, João Ribas, Matheus Negrini da Costa, Leonardo Ruschel</span>
                    Nome do Professor: <span className="text-white font-bold mr-2">Arthur Marques de Oliveira</span>
                    Disciplina: <span className="text-white font-bold">Estrutura de Dados</span>
                </p>
            </footer>
        </div>
    )
}

export default Main