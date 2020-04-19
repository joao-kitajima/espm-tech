package espm_algoritmos.lista_exerc2;

public class Exerc01_c {
	public static void main(String[] args) {

		int A = 6, B = 3, C = 2;

		boolean letra_c;

		letra_c = ((B % C) + 3) <= (B % A) + (C % B);

		if (letra_c) {
			System.out.println("A expressão é verdadeira!");
		} else {
			System.out.println("A expressão é falsa!");
		}

	}

}
