package algoritmos.lista_exerc2;

import java.util.Scanner;

public class Exerc10 {
	public static void main(String[] args) {

		int valor1, valor2, valor3;

		Scanner abobrinha = new Scanner(System.in);

		System.out.print("Favor inserir o primeiro valor: ");
		valor1 = abobrinha.nextInt();
		System.out.print("Favor inserir o segundo valor: ");
		valor2 = abobrinha.nextInt();
		System.out.print("Favor inserir o terceiro valor: ");
		valor3 = abobrinha.nextInt();

		if (valor1 != valor2 && valor2 != valor3 && valor1 != valor3) {
			if (valor1 < valor2 && valor1 < valor3) {
				if (valor2 < valor3) {
					System.out.printf("\nMenor valor: %d.\nMaior valor: %d.", valor1, valor3);
				} else {
					System.out.printf("\nMenor valor: %d.\nMaior valor: %d.", valor1, valor2);
				}
			} else if (valor2 < valor3) {
				if (valor1 < valor3) {
					System.out.printf("\nMenor valor: %d.\nMaior valor: %d.", valor2, valor3);
				} else {
					System.out.printf("\nMenor valor: %d.\nMaior valor: %d.", valor2, valor1);
				}
			} else {
				if (valor1 < valor2) {
					System.out.printf("\nMenor valor: %d.\nMaior valor: %d.", valor3, valor2);
				} else {
					System.out.printf("\nMenor valor: %d.\nMaior valor: %d.", valor3, valor1);
				}
			}
		} else {
			System.out.println("\nOs valores precisam ser diferentes entre si.");
		}

		abobrinha.close();
	}

}
