package espm_algoritmos.lista_exerc2;

import java.util.Scanner;

public class Exerc04_a {
	public static void main(String[] args) {

		double x, y, z;

		Scanner sentinela = new Scanner(System.in);

		System.out.print("Insira o valor de 'x': ");
		x = sentinela.nextDouble();
		System.out.print("Insira o valor de 'y': ");
		y = sentinela.nextDouble();
		System.out.print("Insira o valor de 'z': ");
		z = sentinela.nextDouble();

		if (x > y || z <= 30) {
			x = x * 2;
			z = y / z;
		} else {
			x = x / 2;
			y = z / 5;
		}

		System.out.printf("\nValores finais:\nx = %.2f\ny = %.2f\nz = %.2f", x, y, z);

		sentinela.close();

	}

}
