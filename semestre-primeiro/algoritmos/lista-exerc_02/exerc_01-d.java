package espm_algoritmos.lista_exerc2;

public class Exerc01_d {
	public static void main(String[] args) {

		int A = 6, B = 3, C = 2;

		boolean letra_d;

		letra_d = A * B == A + B - 3 + C / 4;

		if (letra_d) {
			System.out.println("A expressão é verdadeira!");
		} else {
			System.out.println("A expressão é falsa!");
		}

	}

}
