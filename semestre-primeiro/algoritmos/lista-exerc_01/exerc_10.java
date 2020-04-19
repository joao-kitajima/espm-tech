package espm_algoritmos.lista_exerc1;

import java.util.Scanner;

public class Exerc10 {

	public static void main(String[] args) {

		double celsius, fahr;

		Scanner sentinela = new Scanner(System.in);

		System.out.println("Favor inserir a temperatura em °C (graus Celsius):");
		celsius = sentinela.nextDouble();

		fahr = 9 * celsius / 5 + 32;

		System.out.printf("Essa temperatura em graus Fahrenheit é: %.1f°F.", fahr);

		sentinela.close();

	}
}

