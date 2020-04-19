package espm_algoritmos.lista_exerc1;

import java.util.Scanner;

public class Exerc07_a {

	public static void main(String[] args) {

		double a, b, x, y;

		Scanner sentinela = new Scanner(System.in);

		System.out.println("Favor inserir o valor de 'a':");
		a = sentinela.nextDouble();

		System.out.println("Favor inserir o valor de 'b':");
		b = sentinela.nextDouble();

		System.out.println("Favor inserir o valor de 'x':");
		x = sentinela.nextDouble();

		y = (2 + a) / (b - 3) - 2 * x + Math.pow(x, 3);

		System.out.printf("O resultado da equação é y = %.2f!", y);

		sentinela.close();

	}

}
