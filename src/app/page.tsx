"use client"
import { GridItem } from "@/components/GridItem";
import { Level, calculateImc, levels } from "@/helpers/imc";
import { useState } from "react";

const Page = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShowItem, setToShowItem] = useState<Level | null>(null)

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShowItem(calculateImc(heightField, weightField));
    } else {
      alert("Digite todos os campos!");
    }
  }

  const handleBackButton = () => {
    setToShowItem(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div>
      <header className="max-w-5xl my-10 mx-auto pl-5">
        <div>
          <img src="./assets/powered.png" alt="Imagem do Logotipo" width={150} />
        </div>
      </header>

      <div className="flex flex-col gap-10 max-w-5xl my-10 mx-auto px-5 md:flex-row md:gap-20">
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
            className="w-full mt-5 py-4 px-0 bg-sky-600 border-none rounded-lg text-white font-bold cursor-pointer hover:bg-opacity-80 transition duration-300 md:mt-16"
          >
            Calcular
          </button>
        </div>

        <div className="flex-1 flex">
          {!toShowItem &&
            <div className="flex-1 grid grid-cols-1 gap-5 sm:grid-cols-2 ">
            {levels.map((item, key) => {
              {console.log("KEY = " + key)}
              if (key < 4) {
                return <GridItem
                  key={key} item={item}
                />
              } else {
                return null;
              }
            })}
            </div>
          }

          {toShowItem &&
            <div className="flex-1 flex">
              <div
                className="flex justify-center items-center w-20 h-20 -ml-3 -mt-3 absolute bg-sky-600 rounded-full cursor-pointer hover:bg-sky-700 transition duration-300 md:-ml-10 md:mt-36"
                onClick={handleBackButton}
              >
                  <img src="./assets/leftarrow.png" alt="Seta de volta" width={25} />
              </div>
              <GridItem item={toShowItem} />
            </div>
          }
        </div>

      </div>
    </div>
  );
}

export default Page;