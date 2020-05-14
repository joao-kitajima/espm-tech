package algoritmos.estrutura_repeticao;

public class Exerc01_c {
	public static void main(String[] args) {

		int a = 1, b = 0, resultado = 0;

		while (a <= 5) {
			b = 1;
			resultado = 0;

			while (b <= a) {
				resultado += a * b;
				b += 1;
			}

			a += 1;
		}

		System.out.printf("Valor final:\na = %d\nb = %d\nResultado = %d", a, b, resultado);

	}

}
