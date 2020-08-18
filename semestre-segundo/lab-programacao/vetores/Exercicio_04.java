import java.util.Scanner;

public class Exercicio_04 {

	public static void main(String[] args) {

		Scanner sentinela = new Scanner(System.in);

		int vetor[] = new int[10];
		int pares = 0, impares = 0;

		for (int i = 0; i < vetor.length; i++) {

			System.out.print("Favor inserido um número inteiro: ");
			vetor[i] = sentinela.nextInt();

			if (vetor[i] % 2 == 0) {

				pares++;

			} else {

				impares++;

			}

		}

		System.out.printf("\nTotal de números pares inseridos: %d", pares);
		System.out.printf("\nTotal de números ímpares inseridos: %d", impares);

		sentinela.close();

	}

}
