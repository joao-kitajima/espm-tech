package espm_algoritmos.lista_exerc2;

public class Exerc02_f {
	public static void main(String[] args) {

		int a = 2, b = 7;
		double c = 3.5;
		boolean d = false;

		boolean letra_f;

		letra_f = d || Math.pow(b, a) <= c * 10 + a * b;

		if (letra_f) {
			System.out.println("A expressão é verdadeira!");
		} else {
			System.out.println("A expressão é falsa!");
		}
	}

}
