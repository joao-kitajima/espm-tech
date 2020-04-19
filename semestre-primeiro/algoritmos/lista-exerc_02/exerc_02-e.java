package espm_algoritmos.lista_exerc2;

public class Exerc02_e {
	public static void main(String[] args) {

		int a = 2, b = 7;
		double c = 3.5;

		boolean letra_e;

		letra_e = b / a == c || b / a != c;

		if (letra_e) {
			System.out.println("A expressão é verdadeira!");
		} else {
			System.out.println("A expressão é falsa!");
		}
	}

}
