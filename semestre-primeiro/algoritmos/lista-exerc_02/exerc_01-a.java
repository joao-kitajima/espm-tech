package espm_algoritmos.lista_exerc2;

public class Exerc01_a {
	public static void main(String[] args) {

		int A = 6, B = 3, C = 2;

		boolean letra_a;

		letra_a = (A + B / C) < (C / A + 4);

		if (letra_a) {
			System.out.print("A expressão é verdadeira!");
		} else {
			System.out.print("A expressão é falsa!");
		}

	}

}
