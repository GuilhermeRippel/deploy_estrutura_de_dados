import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Main(){
    return(
        <div className="w-screen h-screen bg-gray-800 flex flex-col">
            <Header title="Bem vindo à sua Calculadora" title2="de Formas Geométricas"/>
            <main className="flex-grow w-full p-11 flex flex-col lg:flex-row gap-2 lg:gap-0 justify-around items-center overflow-y-scroll">
                <div className="w-3/4 lg:w-1/4 h-1/3 lg:h-2/3 bg-gray-950 rounded-xl shadow-lg p-4 flex flex-col justify-around">
                    <div><h2 className="text-white font-bold text-center text-xl lg:text-2xl">Quadrado e Retângulo</h2></div>
                    <div className="w-full h-1/2 pb-6 flex flex-col justify-around gap-3">
                        <Link to="/Square" className="w-full h-3/4 lg:h-4/4 bg-gray-800 rounded-md flex items-center justify-center text-white font-bold text-lg hover:bg-gray-900 transition-all duration-300 py-3"><button>Área do Quadrado</button></Link>
                        <Link to="/Retangle" className="w-full h-3/4 lg:h-4/4 bg-gray-800 rounded-md flex items-center justify-center text-white font-bold text-lg hover:bg-gray-900 transition-all duration-300 py-3"><button>Área do Retângulo</button></Link>
                    </div>
                </div>
                <div className="w-3/4 lg:w-1/4 h-1/3 lg:h-2/3 bg-gray-950 rounded-xl shadow-lg p-4 flex flex-col justify-around">
                    <div><h2 className="text-white font-bold text-center text-xl lg:text-2xl">Triângulo</h2></div>
                    <div className="w-full h-1/2 pb-4 flex flex-col justify-around gap-3">
                        <Link to="/Triangle" className="w-full h-3/4 lg:h-4/4 bg-gray-800 rounded-md flex items-center justify-center text-white font-bold text-lg hover:bg-gray-900 transition-all duration-30 py-3"><button>Área do Triângulo</button></Link>
                        <Link to="/Triangle2" className="w-full h-3/4 lg:h-4/4 bg-gray-800 rounded-md flex items-center justify-center text-white font-bold text-lg hover:bg-gray-900 transition-all duration-30 py-3"><button>Perímetro do Triângulo</button></Link>
                    </div>
                </div>
                <div className="w-3/4 lg:w-1/4 h-1/3 lg:h-2/3 bg-gray-950 rounded-xl shadow-lg p-4 flex flex-col justify-around">
                    <div><h2 className="text-white font-bold text-center text-xl lg:text-2xl">Círuclo</h2></div>
                    <div className="w-full h-1/2 pb-4 flex flex-col justify-around gap-3">
                        <Link to="/Circle" className="w-full h-3/4 lg:h-4/4 bg-gray-800 rounded-md flex items-center justify-center text-white font-bold text-lg hover:bg-gray-900 transition-all duration-30 py-3"><button>Diâmetro do Círculo</button></Link>
                        <Link to="/Circle2" className="w-full h-3/4 lg:h-4/4 bg-gray-800 rounded-md flex items-center justify-center text-white font-bold text-lg hover:bg-gray-900 transition-all duration-30 py-3"><button>Circunferência Círculo</button></Link>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Main