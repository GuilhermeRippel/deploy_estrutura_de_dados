import { useState, useRef } from 'react';
import Footer from '../components/Footer';
import ButtonBack from '../components/ButtonBack';
import Header from '../components/Header';

function Triangle() {
    const lado1Ref = useRef(0);
    const lado2Ref = useRef(0);
    const lado3Ref = useRef(0);
    const [perimetro, setPerimetro] = useState(0);

    function calcularArea() {
        const lado1 = parseFloat(lado1Ref.current.value);
        const lado2 = parseFloat(lado2Ref.current.value);
        const lado3 = parseFloat(lado3Ref.current.value);

        if (!isNaN(lado1) && !isNaN(lado2) && !isNaN(lado3)) {
            setPerimetro(lado1 + lado2 + lado3);
        } else {
            alert("Digite valores válidos");
        }
    }

    return (
        <div className="w-screen h-screen bg-gray-800 flex flex-col">
            <Header title='Perímetro do Triângulo' />
            <main className="flex-grow w-full p-2 flex flex-col justify-around items-center">
                <div className="flex flex-col md:flex-row justify-around w-full items-center">
                    <div className="w-full sm:w-3/5 md:w-2/5 lg:w-1/5 xl:w-1/5 flex flex-col gap-1 mb-3 md:mb-0">
                        <input
                            type="number"
                            min='1'
                            max='10'
                            className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-500"
                            placeholder="Lado esquerdo"
                            ref={lado1Ref}
                        />
                        <input
                            type="number"
                            min='1'
                            max='10'
                            className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-500"
                            placeholder="Lado direito"
                            ref={lado2Ref}
                        />
                        <input
                            type="number"
                            min='1'
                            max='10'
                            className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-500"
                            placeholder="Lado inferior"
                            ref={lado3Ref}
                        />
                        <button
                            className=" w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                            onClick={calcularArea}
                        >
                            Calcular Perímetro
                        </button>
                    </div>
                    <div className="font-bold text-white text-lg flex flex-col items-center md:items-start">
                        <div className="flex items-center">
                            <p>Lado esquerdo: {lado1Ref.current.value}</p>
                            <div className="relative flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[190px] border-b-gray-950 bg-transparent"></div>
                                <p className="absolute text-center pt-11" style={{ top: "50%", transform: "translateY(-50%)" }}>Perímetro: {perimetro}</p>
                            </div>
                            <p>Lado Direito: {lado2Ref.current.value}</p>
                        </div>
                        <div className="w-full text-right pr-36 sm:pr-44 md:pr-48 lg:pr-56">
                            <p>Lado Inferior: {lado3Ref.current.value}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full gap-3 flex flex-col items-center text-xl font-bold text-gray-300 pb-14">
                    <h3>Fórmula:</h3>
                    <p className="text-center text-base flex flex-col">
                        O perímetro do triângulo é calculado pela fórmula: Perímetro = lado1 + lado2 + lado3
                        <span>Por exemplo, se os lados medem 3, 4 e 5 metros, o perímetro será: 12</span>
                    </p>
                </div>

            </main>
            <Footer />
            <ButtonBack />
        </div>
    );
}

export default Triangle;
