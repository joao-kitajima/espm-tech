package espm_algoritmos.lista_exerc2;

public class Exerc02_b {
	public static void main(String[] args) {

		int a = 2, b = 7;

		boolean letra_b;

		letra_b = b > a || b == Math.pow(a, a);

		if (letra_b) {
			System.out.print("A expressão é verdadeira!");
		} else {
			System.out.println("A expressão é falsa!");
		}

	}

}
