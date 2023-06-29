"use client"
import { useState } from "react";

const Page = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (heightField && weightField) {

    } else {
      alert("Digite todos os campos!");
    }
  }

  return (
    <div>
      <header className="max-w-4xl my-10 mx-auto">
        <div className="">
          <img src="./assets/powered.png" alt="Imagem do Logotipo" width={150} />
        </div>
      </header>

      <div className="flex max-w-4xl my-10 mx-auto gap-20">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-sky-950">Calcule o seu IMC</h1>
          <p className="text-base mb-10 text-gray-700">IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcula o peso ideal de cada pessoa.</p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex.: 1.5 (em métros)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(+e.target.value)}
            className="w-full mb-3 py-3 px-1 border-b border-gray-400 border-opacity-40 outline-none text-sm"
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex.: 78.1 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(+e.target.value)}
            className="w-full py-3 px-1 border-b border-gray-400 border-opacity-40 outline-none text-sm"
          />

          <button 
            onClick={handleCalculateButton}
            className="w-full mt-16 py-4 px-0 bg-sky-600 border-none rounded-lg text-white font-bold cursor-pointer hover:bg-opacity-80 transition duration-300"
          >
            Calcular
          </button>
        </div>
        <div className="flex-1">right</div>
      </div>
    </div>
  );
}

export default Page;