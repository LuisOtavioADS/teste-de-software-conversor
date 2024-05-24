import { Conversor } from "../src/conversor";

test('testa a função getHistorico', () => {
    
    Conversor.celcius(32);
    Conversor.velocidade(1);
  
    
    const historico = Conversor.gethistorico();
  
  
    expect(historico).toEqual(['Celcius: 0.0', 'Velocidade: 3.6']);
    console.log(historico)
    
    
  });



 