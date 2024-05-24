export class Conversor {
    static historico: string[] = [];

    static celcius(a: number): number {
        const res = (a - 32) / 1.8;
        this.historico.push(`Celcius: ${res.toFixed(1)}`);
        return Number(res.toFixed(1));
    }

    static velocidade(a: number): number {
        const res = a * 3.6;
        this.historico.push(`Velocidade: ${res.toFixed(1)}`);
        return Number(res.toFixed(1));
    }

    static litros(a: number): number {
        const res = a * 0.001;
        this.historico.push(`Litros: ${res.toFixed(1)}`);
        return Number(res.toFixed(1));
    }

    static multiplicacao(a: number, b: number): number {
        const res = a * b;
        this.historico.push(`Multiplicação: ${res}`);
        return res;
    }

    static gethistorico(): string[] {
        return this.historico;
    }
}
