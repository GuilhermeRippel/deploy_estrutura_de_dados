import { useState, useRef } from 'react';
import Footer from '../components/Footer';
import ButtonBack from '../components/ButtonBack';
import Header from '../components/Header';

function Triangle() {
    const alturaRef = useRef(0);
    const baseRef = useRef(0);
    const [area, setArea] = useState(0);

    function calcularArea() {
        const altura = parseFloat(alturaRef.current.value);
        const base = parseFloat(baseRef.current.value);

        if (!isNaN(altura) && !isNaN(base)) {
            setArea((altura * base) / 2);
        } else {
            alert("Digite valores válidos");
        }
    }

    return (
        <div className="w-screen h-screen bg-gray-800 flex flex-col">
            <Header title='Área do Triângulo' />
            <main className="flex-grow w-full p-2 flex flex-col justify-around items-center">
                <div className="flex flex-col md:flex-row justify-around w-full items-center">
                    <div className="w-full sm:w-3/5 md:w-2/5 lg:w-1/5 xl:w-1/5 flex flex-col gap-1 mb-5 md:mb-0">
                        <input
                            type="number"
                            min='1'
                            max='10'
                            className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-500"
                            placeholder="Insira um valor para Base"
                            ref={baseRef}
                        />
                        <input
                            type="number"
                            min='1'
                            max='10'
                            className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-500"
                            placeholder="Insira um valor para Altura"
                            ref={alturaRef}
                        />
                        <button
                            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                            onClick={calcularArea}
                        >
                            Calcular Área
                        </button>
                    </div>
                    <div className="font-bold text-white text-lg flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3">
                            <p>Altura: {alturaRef.current.value}</p>
                            <div className="relative flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[190px] border-b-gray-950 bg-transparent"></div>
                                <p className="absolute text-center" style={{ top: "50%", transform: "translateY(-50%)" }}>Área: {area}</p>
                            </div>
                        </div>
                        <div className="w-full text-right pr-16">
                            <p>Base: {baseRef.current.value}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full gap-3 flex flex-col items-center text-xl font-bold text-gray-300 pb-12">
                    <h3>Fórmula:</h3>
                    <p className="text-center text-base flex flex-col">
                        A área do triângulo é calculada pela fórmula: Área = (base × altura) / 2
                        <span>Por exemplo, se a base é 4 metros e a altura é 3 metros, a área será: 6</span>
                    </p>
                </div>

            </main>
            <Footer />
            <ButtonBack />
        </div>
    );
}

export default Triangle;
