public import java.util.Scanner;

public class CTask1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int low = 1, high = 100, guess;
        int target = 64; 
        int attempt = 1; 

        while (true) {
            System.out.print("Guess a number between " + low + " and " + high + ": ");

            
            if (!scanner.hasNextInt()) {
                System.out.println("Invalid input! Please enter a valid number.");
                scanner.next(); 
                continue;  
            }

            guess = scanner.nextInt();

            if (guess < low || guess > high) {
                System.out.printf("Guess out of range! Please enter a number between %d and %d.%n", low, high);
                continue;
            }

    
            if (guess < target) {
                System.out.printf("Attempt #%d:%n", attempt);
                System.out.printf("Guess: %d    | Feedback: Too low     | Updated Range: %d - %d%n", guess, guess + 1, high);
                low = guess + 1; 
            } else if (guess > target) {
                System.out.printf("Attempt #%d:%n", attempt);
                System.out.printf("Guess: %d    | Feedback: Too high    | Updated Range: %d - %d%n", guess, low, guess - 1);
                high = guess - 1; 
            } else {
            
                System.out.printf("Attempt #%d:%n", attempt);
                System.out.printf("Guess: %d   | Feedback: Correct!    | Final Range: %d - %d%n", guess, low, high);
                break;  
            }

            attempt++; 
        }

        System.out.println("Game Over! Thanks for playing.");
        scanner.close();  
    }
}
  {
    
}
