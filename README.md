# Sample Copilot Chat Extension

This is a sample Visual Studio Code extension that provides stock price information using Yahoo Finance. The extension integrates with GitHub Copilot Chat to offer a seamless experience for users to get stock information.

## Features

- Fetch current stock prices using Yahoo Finance.
- Integrate with GitHub Copilot Chat for interactive stock price queries.
- Register and use custom chat participants and tools.

## Getting Started

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/) (version 1.95.0 or higher)
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/sample-copilot-chat.git
    cd sample-copilot-chat
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Compile the TypeScript code:
    ```sh
    npm run compile
    ```

### Running the Extension

1. Open the project in Visual Studio Code.
2. Press `F5` to open a new window with your extension loaded.
3. Run your command from the command palette by pressing (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and typing `Hello World`.

### Debugging

- Set breakpoints in your code inside `src/extension.ts` to debug your extension.
- Find output from your extension in the debug console.

### Testing

1. Run the "watch" task via the **Tasks: Run Task** command.
2. Open the Testing view from the activity bar and click the "Run Test" button, or use the hotkey `Ctrl/Cmd + ; A`.
3. See the output of the test result in the Test Results view.

## Project Structure

- `src/extension.ts`: Main file where the extension is implemented.
- `src/stockTools.ts`: Contains the implementation of the `StockPriceTool` class.
- `.vscode/`: Contains VS Code specific configuration files.
- `package.json`: Manifest file that declares the extension and its dependencies.
- `tsconfig.json`: TypeScript configuration file.
- `eslint.config.mjs`: ESLint configuration file.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Yahoo Finance API](https://www.npmjs.com/package/yahoo-finance2)
- [GitHub Copilot Chat](https://github.com/github/copilot-chat)
