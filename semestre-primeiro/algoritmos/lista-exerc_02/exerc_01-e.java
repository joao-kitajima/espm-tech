package espm_algoritmos.lista_exerc2;

public class Exerc01_e {
	public static void main(String[] args) {

		int A = 6, B = 3, C = 2;

		boolean letra_e;

		letra_e = A / B % B % A % C != B % A % B % C % A;

		if (letra_e) {
			System.out.println("A expressão é verdadeira!");
		} else {
			System.out.println("A expressão é falsa!");
		}

	}

}
