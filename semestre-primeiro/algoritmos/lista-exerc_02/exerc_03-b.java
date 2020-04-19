package espm_algoritmos.lista_exerc2;

import java.util.Scanner;

public class Exerc03_b {
	public static void main(String[] args) {

		double x, y;

		Scanner sentinela = new Scanner(System.in);

		System.out.print("Insira o valor de 'x': ");
		x = sentinela.nextDouble();
		System.out.print("Insira o valor de 'y': ");
		y = sentinela.nextDouble();

		if (x <= y && y != 7) {
			x = x + y;
			y = y - 5;
		} else {
			y = x - y;
		}

		System.out.printf("\nValores finais:\nx = %.2f\ny = %.2f", x, y);

		sentinela.close();

	}

}
