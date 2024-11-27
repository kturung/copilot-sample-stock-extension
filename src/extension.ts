// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as chatUtils from '@vscode/chat-extension-utils';
import { StockPriceTool } from './stockTools';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    console.log('Stock price chat extension is now active!');

    // Register the stock price tool
    context.subscriptions.push(
        vscode.lm.registerTool('stock-chat_getPrice', new StockPriceTool())
    );

    // Register chat participant
    const handler: vscode.ChatRequestHandler = async (request, chatContext, stream, token) => {
        const [model] = await vscode.lm.selectChatModels({ vendor: 'copilot', family: 'gpt-4o' });
                if (!model) {
                    console.log('Model not found. Please make sure the GitHub Copilot Chat extension is installed and enabled.');
                    return;
                }
        const tools = vscode.lm.tools.filter(tool => tool.name === 'stock-chat_getPrice');
        const libResult = chatUtils.sendChatParticipantRequest(
            request,
            chatContext,
            {
                prompt: 'You are a helpful stock market assistant. Help users get stock information.',
                model: model,
                responseStreamOptions: {
                    stream,
                    references: true,
                    responseText: true
                },
                tools
            },
            token
        );
        return await libResult.result;
    };

    const participant = vscode.chat.createChatParticipant('stock-chat.stockTools', handler);
    context.subscriptions.push(participant);
}

// This method is called when your extension is deactivated
export function deactivate() {}
