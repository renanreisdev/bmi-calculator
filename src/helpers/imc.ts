export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
}

export const levels: Level[] = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.4] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.5, 24.9] },
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 29.9] },
    { title: 'Obesidade I', color: '#C3423F', icon: 'down', imc: [30, 34.9] },
    { title: 'Obesidade II', color: '#AD312F', icon: 'down', imc: [35, 40] },
    { title: 'Obesidade III', color: '#8F1E1C', icon: 'down', imc: [40.1, 100] },
];

export const calculateImc = (height: number, weight: number) => {
    const imc = weight / (height * height);

    for (let level of levels) {
        if (imc >= level.imc[0] && imc <= level.imc[1]) {
            let levelCopy = {...level};
            levelCopy.yourImc = +imc.toFixed(2);
            return levelCopy;
        }
    }

    return null;
};