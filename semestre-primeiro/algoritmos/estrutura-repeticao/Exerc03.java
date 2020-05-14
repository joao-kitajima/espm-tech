package algoritmos.estrutura_repeticao;

import java.util.Scanner;

public class Exerc03 {
	public static void main(String[] args) {

		double valor, aux = Double.MIN_VALUE;
		int rep = 15;

		Scanner sentinela = new Scanner(System.in);

		while (rep > 0) {
			System.out.print("Digite um número: \n");
			valor = sentinela.nextDouble();

			if (valor > aux) {
				aux = valor;
			}

			rep--; // rep = rep - 1;
		}

		System.out.printf("Maior número: %.2f", aux);

		sentinela.close();
	}

}
