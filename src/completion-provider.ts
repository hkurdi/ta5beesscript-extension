import * as vscode from "vscode";

const keywords = [
    'khalli', 'thabit', 'arrifli', 'iza', 'willa', 'la', 'raje3li',
    'hawel', 'law_sar_ma_sar', 'irmi', 'kammil', 'iksir', 'stanna', 'tazamonan'
];

const snippets = {
    'arrifli': 'arrifli ${1:name}(${2:params}) {\n\t${0}\n}',
    'iza': 'iza (${1:condition}) {\n\t${0}\n}',
    'hawel': 'hawel {\n\t${1}\n} law_sar_ma_sar (${2:error}) {\n\t${0}\n}'
};

export class Ta5beesCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
    ): vscode.CompletionItem[] {
        const completions: vscode.CompletionItem[] = [];
        
        // Add keywords
        keywords.forEach(keyword => {
            const completion = new vscode.CompletionItem(keyword);
            completion.kind = vscode.CompletionItemKind.Keyword;
            completions.push(completion);
        });

        // Add snippets
        Object.entries(snippets).forEach(([label, snippet]) => {
            const completion = new vscode.CompletionItem(label);
            completion.kind = vscode.CompletionItemKind.Snippet;
            completion.insertText = new vscode.SnippetString(snippet);
            completions.push(completion);
        });

        return completions;
    }
}