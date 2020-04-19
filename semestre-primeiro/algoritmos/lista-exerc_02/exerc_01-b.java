package espm_algoritmos.lista_exerc2;

public class Exerc01_b {
	public static void main(String[] args) {

		int A = 6, B = 3, C = 2;

		boolean letra_b;

		letra_b = ((B % C) + 3) >= (B % A) + (C % B);

		if (letra_b) {
			System.out.println("A expressão é verdadeira!");
		} else {
			System.out.println("A expressão é falsa!");
		}

	}

}
