package espm_algoritmos.lista_exerc2;

public class Exerc02_g {
	public static void main(String[] args) {

		boolean d = false, e = true;

		boolean letra_g;

		letra_g = d || e || (e || d && !(d || d)); // Está na questão: (d || d)

		if (letra_g) {
			System.out.println("A expressão é verdadeira!");
		} else {
			System.out.println("A expressão é falsa!");
		}

	}

}
