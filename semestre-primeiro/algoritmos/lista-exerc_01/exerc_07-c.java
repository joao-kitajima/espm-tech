package espm_algoritmos.lista_exerc1;

import java.util.Scanner;

public class Exerc07_c {

	public static void main(String[] args) {

		double a, b, c, x;

		Scanner sentinela = new Scanner(System.in);

		System.out.println("Favor inserir o valor de 'a':");
		a = sentinela.nextDouble();

		System.out.println("Favor inserir o valor de 'b':");
		b = sentinela.nextDouble();

		System.out.println("Favor inserir o valor de 'c':");
		c = sentinela.nextDouble();

		x = -Math.pow(b, 15) - Math.sqrt(Math.pow(b, 2) - 4 * a * c) / (2 * Math.pow(a, 2) * Math.sqrt(7 * c));

		System.out.printf("O resultado da equação é x = %.2f!", x);

		sentinela.close();

	}

}
