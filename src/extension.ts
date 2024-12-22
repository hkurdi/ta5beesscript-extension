import * as vscode from 'vscode';
import { Ta5beesCompletionProvider } from './completion-provider';

/**
 * This function is called when the extension is activated.
 * It registers providers, commands, and other extension features.
 */
export function activate(context: vscode.ExtensionContext) {
    console.log('✅ Ta5beesScript extension activated!');

    // ✅ Register Autocomplete Provider
    const completionProvider = vscode.languages.registerCompletionItemProvider(
        { language: 'ta5bees' }, // Target Ta5beesScript files
        new Ta5beesCompletionProvider(),
        '' // Trigger on any character (can be adjusted)
    );

    // ✅ Register Additional Commands (Optional Example)
    const sampleCommand = vscode.commands.registerCommand('ta5bees.sayHello', () => {
        vscode.window.showInformationMessage('Hello from Ta5beesScript!');
    });

    // ✅ Add to Context Subscriptions (ensures proper cleanup)
    context.subscriptions.push(completionProvider);
    context.subscriptions.push(sampleCommand);
}

/**
 * This function is called when the extension is deactivated.
 * Clean up any resources or listeners here.
 */
export function deactivate() {
    console.log('❌ Ta5beesScript extension deactivated.');
}
