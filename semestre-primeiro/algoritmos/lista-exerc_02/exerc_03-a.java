package espm_algoritmos.lista_exerc2;

import java.util.Scanner;

public class Exerc03_a {
	public static void main(String[] args) {

		double x, y;

		Scanner sentinela = new Scanner(System.in);

		System.out.print("Insira o valor de 'x': ");
		x = sentinela.nextDouble();
		System.out.print("Insira o valor de 'y': ");
		y = sentinela.nextDouble();

		if (x > y) {
			y = x * y;
			System.out.printf("Novo valor: y = %.2f", y);
		} else {
			System.out.println("O valor de 'x' não é maior que o de 'y'.");
		}

		sentinela.close();

	}

}
