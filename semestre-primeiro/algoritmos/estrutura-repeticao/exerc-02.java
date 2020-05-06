import java.util.Scanner;

public class Exerc02 {
	public static void main(String[] args) {

		int valor_a, valor_b;
		int aux;

		Scanner sentinela = new Scanner(System.in);

		System.out.print("Insira o primeiro valor: ");
		valor_a = sentinela.nextInt();
		System.out.print("Insira o segundo valor: ");
		valor_b = sentinela.nextInt();

		aux = valor_a;

		if (valor_a >= valor_b) {
			System.out.print("O segundo valor deverá ser maior do que o primeiro!");
		} else {
			while (aux <= valor_b) {
				System.out.printf("%d\n", aux);
				aux++;
			}
		}

		sentinela.close();
	}

}
