package algoritmos.estrutura_repeticao;

public class Exerc01_b {
	public static void main(String[] args) {

		int a = 1, b = 4, s = 0;

		while (a <= 4) {
			if (a <= b) {
				s += a * b;
			} else {
				s -= a * b;
			}

			a += 1;
			b -= 1;
		}

		System.out.printf("Valor final:\na = %d\nb = %d\ns = %d", a, b, s);

	}

}
