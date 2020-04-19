package espm_algoritmos.lista_exerc2;

public class Exerc02_a {
	public static void main(String[] args) {

		int a = 2, b = 7;
		double c = 3.5;
		boolean d = false;

		boolean letra_a;

		letra_a = b == a * c && (d || b != c);

		if (letra_a) {
			System.out.println("A expressão é verdadeira!");
		} else {
			System.out.println("A expressão é falsa!");
		}

	}

}
