package espm_algoritmos.lista_exerc2;

import java.util.Scanner;

public class Exerc07 {
	public static void main(String[] args) {

		double total_vendas, salario;

		Scanner sentinela = new Scanner(System.in);

		System.out.println("Qual foi o valor total das vendas?");
		total_vendas = sentinela.nextDouble();

		if (total_vendas > 25000) {
			salario = 0.1885 * total_vendas;
		} else {
			salario = 0.175 * total_vendas;
		}

		System.out.printf("\nSalário: R$%.2f", salario);

		sentinela.close();
	}

}
