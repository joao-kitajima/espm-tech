package espm_algoritmos.lista_exerc1;

import java.util.Scanner;

public class Exerc07_b {

	public static void main(String[] args) {

		double a, b, c, d, x;

		Scanner sentinela = new Scanner(System.in);

		System.out.println("Favor inserir o valor de 'a':");
		a = sentinela.nextDouble();

		System.out.println("Favor inserir o valor de 'b':");
		b = sentinela.nextDouble();

		System.out.println("Favor inserir o valor de 'c':");
		c = sentinela.nextDouble();

		System.out.println("Favor inserir o valor de 'd':");
		d = sentinela.nextDouble();

		x = (b / (a + c) + 4 * a) / (d - 2 * a / 3 + c);

		System.out.printf("O resultado da equação é x = %.2f!", x);

		sentinela.close();

	}

}
