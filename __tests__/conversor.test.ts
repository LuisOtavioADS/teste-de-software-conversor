import { Conversor } from "../src/conversor";

describe('Conversão de unidade de medidas', () =>{

    //Fahrenheit para celcius
    test('140 fahrenheit equivale a 60 Celcius ', () => {
        expect(Conversor.celcius(140)).toBe(60);
    });
    test('100 fahrenheit equivale a 37.8 Celcius ', () => {
        expect(Conversor.celcius(100)).toBe(37.8);
    });

    //Metros por segundo para quilometros por hora
    test('100 m/s equivale a 360km/h', () => {
        expect(Conversor.velocidade(100)).toBe(360);
    });
    test('90 m/s equivale a 324km/h', () => {
        expect(Conversor.velocidade(90)).toBe(324);
    });

    //Mililitros para Litros
    test('10000 mililitros equivale a 10 litro(s)', () => {
        expect(Conversor.litros(10000)).toBe(10);
    });
    test('180 mililitros equivale a 0.18 litro(s)', () => {
        expect(Conversor.litros(180)).toBe(0.2);
    });

    
    
});