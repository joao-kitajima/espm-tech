package algoritmos.estrutura_repeticao;

import java.util.Scanner;

public class Exerc04 {
	public static void main(String[] args) {

		int num, tab, rep;

		Scanner sentinela = new Scanner(System.in);

		do {
			System.out.print("Digite um número: ");
			num = sentinela.nextInt();

			if (num <= 0) {
				System.out.println("\nO número inserido precisa ser positivo!");
			} else {
				int aux = 1;

				while (aux > 0 && aux <= 10) {
					tab = num * aux;
					System.out.printf("\n%d x %d = %d", num, aux, tab);

					aux++; // aux = aux + 1;
				}
			}

			System.out.println("\n\nDigite '1' para continuar e '0' para sair. ");
			rep = sentinela.nextInt();
		} while (rep == 1);

		sentinela.close();
	}

}
