import { Level } from "@/helpers/imc";

type Props = {
    item: Level;
}

export const GridItem = ({ item }: Props) => {
    return (
        <div className="flex-1 flex flex-col justify-center items-center p-5 text-white rounded-lg" style={{backgroundColor: item.color}} >
            <div className="flex justify-center items-center w-16 h-16 bg-black bg-opacity-10 rounded-full">
                <img
                    src={`./assets/${item.icon}.png`} alt="Imagem de positivo" width={30}
                    className=""
                />
            </div>
            <div className="mt-2 text-2xl font-bold">{item.title}</div>

            {item.yourImc &&
                <div className="mt-5 mb-12 mx-0 text-lg">Seu IMC é de {item.yourImc} kg/m²</div>
            }

            <div className="mt-3 text-xs">
                <>
                    IMC está entre <strong>{item.imc[0].toFixed(2)}</strong> e <strong>{item.imc[1].toFixed(2)}</strong>
                </>
            </div>
        </div>
    );
}