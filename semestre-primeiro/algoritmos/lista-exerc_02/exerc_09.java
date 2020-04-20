package espm_algoritmos.lista_exerc2;

import java.util.Scanner;

public class Exerc08 {
	public static void main(String[] args) {

		double valor_compra, desconto;

		Scanner sentinela = new Scanner(System.in);

		System.out.println("Qual é o valor da compra do cliente?");
		valor_compra = sentinela.nextDouble();

		if (valor_compra >= 350.00) {
			desconto = 0.22 * valor_compra;
			valor_compra = 0.78 * valor_compra;
		} else {
			desconto = 0.15 * valor_compra;
			valor_compra = 0.85 * valor_compra;
		}

		System.out.printf("\nValor da compra após desconto: R$%.2f\nDesconto: R$%.2f", valor_compra, desconto);

		sentinela.close();

	}

}
