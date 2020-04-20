package espm_algoritmos.lista_exerc2;

import java.util.Scanner;

public class Exerc09 {
	public static void main(String[] args) {

		double aux;

		Scanner sentinela = new Scanner(System.in);

		System.out.println("Qual é a sua renda anual?");
		aux = sentinela.nextDouble();

		if (aux <= 10000.00) {
			System.out.println("\nSituação: Isento de imposto.");
		} else if (aux <= 25000.00) {
			aux = 0.1035 * aux;
			System.out.printf("\nSituação: Alíquota = R$%.2f", aux);
		} else if (aux <= 50000.00) {
			aux = 0.2542 * aux;
			System.out.printf("\nSituação: Alíquota = R$%.2f", aux);
		} else {
			aux = 0.2975 * aux;
			System.out.printf("\nSituação: Alíquota = R$%.2f", aux);
		}

		sentinela.close();

	}

}
