import ButtonBack from '../components/ButtonBack';
import { useState, useRef } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Circle2() {
    const raioRef = useRef(0);
    const [circunferencia, setCircunferencia] = useState(0);

    function calcularArea() {
        const raio = parseFloat(raioRef.current.value);

        if (!isNaN(raio)) {
            const pi = Math.PI;
            const result = (2 * pi) * raio;
            setCircunferencia(result.toFixed(2));
        } else {
            alert("Digite valores válidos");
        }
    }

    return (
        <div className="w-screen h-screen bg-gray-800 flex flex-col">
            <Header title='Circunferência do Círculo' />
            <main className="flex-grow w-full p-2 flex flex-col justify-around items-center">
                <div className="flex flex-col md:flex-row justify-around w-full items-center">
                    <div className="w-full sm:w-3/5 md:w-2/5 lg:w-1/5 xl:w-1/5 flex flex-col gap-5 mb-5 md:mb-0">
                        <input
                            type="number"
                            min='1'
                            max='10'
                            className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-500"
                            placeholder="Insira um valor para Raio"
                            ref={raioRef}
                        />
                        <button
                            className="mt-5 w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                            onClick={calcularArea}
                        >
                            Calcular Circunferência
                        </button>
                    </div>
                    <div className="font-bold text-white text-lg flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3">
                            <p>Raio: {raioRef.current.value}</p>
                            <div className="w-52 h-52 bg-transparent border-8 border-gray-950 flex items-center justify-center rounded-full">Circunferência: {circunferencia}</div>
                        </div>
                    </div>
                </div>
                <div className="w-full gap-3 flex flex-col items-center text-xl font-bold text-gray-300">
                    <h3>Fórmula:</h3>
                    <p className="text-center text-base flex flex-col">
                        A circunferência do círculo é calculada pela fórmula: Circunferência = 2 × π × raio
                        <span>Por exemplo, se o raio é 5 metros, a circunferência será: 31,4</span>
                    </p>
                </div>

            </main>
            <Footer />
            <ButtonBack />
        </div>
    );
}

export default Circle2;
