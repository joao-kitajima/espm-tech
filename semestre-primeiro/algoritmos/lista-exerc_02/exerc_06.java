package espm_algoritmos.lista_exerc2;

import java.util.Scanner;

public class Exerc06 {
	public static void main(String[] args) {

		int n1, n2, aux;

		Scanner sentinela = new Scanner(System.in);

		System.out.println("Insira o valor de um número inteiro: ");
		n1 = sentinela.nextInt();
		System.out.println("Insira o valor de outro número inteiro: ");
		n2 = sentinela.nextInt();

		System.out.printf("Portanto, a pergunta é: %d é múltiplo de %d?\n\n", n1, n2);

		aux = n1 / n2;
		aux = aux * n2;

		if (n1 - aux == 0) {
			System.out.printf("Sim! %d é múltiplo de %d.", n1, n2);
		} else {
			System.out.printf("Não! %d não é múltiplo de %d.", n1, n2);
		}

		sentinela.close();
	}

}
