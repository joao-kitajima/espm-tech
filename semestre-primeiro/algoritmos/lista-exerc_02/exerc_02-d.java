package espm_algoritmos.lista_exerc2;

public class Exerc02_d {
	public static void main(String[] args) {

		int a = 2, b = 7;
		double c = 3.5;
		boolean d = false;

		boolean letra_d;

		letra_d = !(d) && Math.sqrt(a + b) >= c;

		if (letra_d) {
			System.out.println("A expressão é verdadeira!");
		} else {
			System.out.println("A expressão é falsa!");
		}
	}

}
