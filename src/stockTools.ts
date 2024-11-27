import * as vscode from 'vscode';
import yahooFinance from 'yahoo-finance2';

interface IStockPriceParameters {
    symbol: string;
}

export class StockPriceTool implements vscode.LanguageModelTool<IStockPriceParameters> {
    async invoke(
        options: vscode.LanguageModelToolInvocationOptions<IStockPriceParameters>,
        _token: vscode.CancellationToken
    ) {
        try {
            const quote = await yahooFinance.quote(options.input.symbol);
            return new vscode.LanguageModelToolResult([
                new vscode.LanguageModelTextPart(
                    `${quote.displayName} (${quote.symbol}):\n` +
                    `Current Price: $${quote.regularMarketPrice}\n` +
                    `Previous Close: $${quote.regularMarketPreviousClose}\n` +
                    `Day Range: $${quote.regularMarketDayLow} - $${quote.regularMarketDayHigh}`
                )
            ]);
        } catch (err: unknown) {
            const error = err as Error;
            return new vscode.LanguageModelToolResult([
                new vscode.LanguageModelTextPart(`Error fetching stock price: ${error?.message ?? 'Unknown error'}`)
            ]);
        }
    }

    async prepareInvocation(
        options: vscode.LanguageModelToolInvocationPrepareOptions<IStockPriceParameters>,
        _token: vscode.CancellationToken
    ) {
        return {
            invocationMessage: `Fetching stock price for ${options.input.symbol}`,
            confirmationMessages: {
                title: 'Get Stock Price',
                message: new vscode.MarkdownString(`Get the current stock price for ${options.input.symbol}?`)
            }
        };
    }
}