import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SimpleCalculator {

    private JFrame frame;
    private JTextField textField;
    private double num1 = 0, num2 = 0, result = 0;
    private String operator = "";

    public static void main(String[] args) {
        EventQueue.invokeLater(() -> {
            try {
                SimpleCalculator window = new SimpleCalculator();
                window.frame.setVisible(true);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }

    public SimpleCalculator() {
        initialize();
    }

    private void initialize() {
        // Create the frame
        frame = new JFrame();
        frame.setBounds(100, 100, 400, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.getContentPane().setLayout(null);

        // Create the text field for input and output
        textField = new JTextField();
        textField.setFont(new Font("Arial", Font.PLAIN, 24));
        textField.setBounds(10, 10, 360, 50);
        textField.setColumns(10);
        frame.getContentPane().add(textField);

        // Button creation for numbers and operations
        String[] buttons = {
                "7", "8", "9", "/",
                "4", "5", "6", "*",
                "1", "2", "3", "-",
                "C", "0", "=", "+"
        };

        // Create a grid layout for the calculator buttons
        int x = 10, y = 70;
        for (int i = 0; i < buttons.length; i++) {
            JButton btn = new JButton(buttons[i]);
            btn.setFont(new Font("Arial", Font.PLAIN, 24));
            btn.setBounds(x, y, 80, 80);
            btn.addActionListener(new ButtonClickListener());
            frame.getContentPane().add(btn);

            x += 90;  // Move to the next button's x position
            if ((i + 1) % 4 == 0) { // After every 4 buttons, move to the next row
                x = 10;
                y += 90;
            }
        }
    }

    // ActionListener to handle button clicks
    private class ButtonClickListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            String command = e.getActionCommand();

            if ("0123456789".contains(command)) {
                textField.setText(textField.getText() + command);
            } else if (command.equals("C")) {
                textField.setText("");
                num1 = num2 = result = 0;
                operator = "";
            } else if (command.equals("=")) {
                num2 = Double.parseDouble(textField.getText());
                calculateResult();
                textField.setText(String.valueOf(result));
                num1 = result;
                operator = "";
            } else {
                if (!operator.isEmpty()) {
                    return; // Ignore if operator is already selected
                }
                operator = command;
                num1 = Double.parseDouble(textField.getText());
                textField.setText("");
            }
        }

        private void calculateResult() {
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    if (num2 != 0) {
                        result = num1 / num2;
                    } else {
                        textField.setText("Error");
                        num1 = num2 = result = 0;
                        operator = "";
                    }
                    break;
            }
        }
    }
}
