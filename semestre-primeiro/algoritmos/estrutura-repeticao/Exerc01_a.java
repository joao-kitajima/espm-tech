package algoritmos.estrutura_repeticao;

public class Exerc01_a {
	public static void main(String[] args) {

		int a = 1, s = 0;

		while (a < 5) {
			s += a;
			a += 2;
		}

		System.out.printf("Valor final:\na = %d\ns = %d", a, s);

	}

}
