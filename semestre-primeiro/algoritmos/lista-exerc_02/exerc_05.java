package espm_algoritmos.lista_exerc2;

import java.util.Scanner;

public class Exerc05 {
	public static void main(String[] args) {

		double numer, denom;

		Scanner sentinela = new Scanner(System.in);

		System.out.print("Insira o valor do numerador: ");
		numer = sentinela.nextDouble();
		System.out.print("Insira o valor de denominador: ");
		denom = sentinela.nextDouble();

		if (numer == 0 && denom == 0) {
			System.out.println("\nResultado indeterminável!");
		} else if (denom == 0) {
			System.out.println("\nOperação impossível entre números!");
		} else {
			numer = numer / denom;
			System.out.printf("\nResultado = %.2f", numer);
		}

		sentinela.close();

	}

}
