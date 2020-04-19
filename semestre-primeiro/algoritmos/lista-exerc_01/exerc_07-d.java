package espm_algoritmos.lista_exerc1;

import java.util.Scanner;

public class Exerc07_d {
	public static void main(String[] args) {

		double a, b, c, x;

		Scanner sentinela = new Scanner(System.in);

		System.out.print("Favor inserir o valor de 'a': ");
		a = sentinela.nextDouble();
		System.out.print("Favor inserir o valor de 'b': ");
		b = sentinela.nextDouble();
		System.out.print("Favor inserir o valor de 'c': ");
		c = sentinela.nextDouble();

		x = (Math.pow((b + 1), 2) + c + a) / (b + 0.5 + (2 * a / Math.pow(2, a)));

		System.out.printf("Resultado: x = %.2f", x);

		sentinela.close();

	}
}
