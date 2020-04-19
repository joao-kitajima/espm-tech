package espm_algoritmos.lista_exerc1;

import java.util.Scanner;

public class Exerc14 {

	public static void main(String[] args) {

		byte aulas_sem;
		double valor_aula, sb, ha, dsr, salario;

		Scanner sentinela = new Scanner(System.in);

		System.out.println("Qual é o valor da aula?");
		valor_aula = sentinela.nextDouble();

		System.out.println("Qual é o total de aulas semanais?");
		aulas_sem = sentinela.nextByte();

		sb = aulas_sem * 4.5 * valor_aula;
		ha = 0.05 * sb;
		dsr = 1.0 / 6 * (sb + ha);

		salario = sb + ha + dsr;

		System.out.printf("O salário mensal será de R$%.2f.", salario);

		sentinela.close();

	}
}
