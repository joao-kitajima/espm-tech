package espm_algoritmos.lista_exerc2;

import java.util.Scanner;

public class Exerc04_b {
	public static void main(String[] args) {

		int qtde_itens_comprados;
		double total_conta;

		Scanner sentinela = new Scanner(System.in);

		System.out.println("Quantos itens foram comprandos?");
		qtde_itens_comprados = sentinela.nextInt();
		System.out.println("Qual foi o valor total da conta?");
		total_conta = sentinela.nextDouble();

		if (qtde_itens_comprados > 15 && total_conta > 150.00) {
			total_conta = 0.75 * total_conta;
			System.out.printf("\nParabéns! Você recebeu desconto!\nNovo Total: R$%.2f", total_conta);
		} else {
			System.out.printf("\nInfelizmente, a compra não é elegível para desconto!\nTotal: R$%.2f", total_conta);
		}

		sentinela.close();

	}

}
