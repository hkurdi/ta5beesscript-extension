import * as vscode from 'vscode';
import { Ta5beesCompletionProvider } from './completion-provider';

/**
 * This function is called when the extension is activated.
 * It registers providers and other extension features.
 */
export function activate(context: vscode.ExtensionContext) {
    console.log('✅ Ta5beesScript extension activated!');

    // ✅ Register Autocomplete Provider
    const completionProvider = vscode.languages.registerCompletionItemProvider(
        { language: 'ta5beesscript' }, // Matches the language ID in package.json
        new Ta5beesCompletionProvider(),
        '.', '(' // Trigger autocomplete on '.' and '('
    );

    // ✅ Add to Context Subscriptions (ensures proper cleanup)
    context.subscriptions.push(completionProvider);
}

/**
 * This function is called when the extension is deactivated.
 * Clean up any resources or listeners here.
 */
export function deactivate() {
    console.log('❌ Ta5beesScript extension deactivated.');
}
