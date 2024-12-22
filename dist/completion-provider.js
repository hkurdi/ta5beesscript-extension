"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ta5beesCompletionProvider = void 0;
const vscode = __importStar(require("vscode"));
const keywords = [
    'khalli', 'thabit', 'arrifli', 'iza', 'willa', 'la', 'raje3li',
    'hawel', 'law_sar_ma_sar', 'irmi', 'kammil', 'iksir', 'stanna', 'tazamonan'
];
const snippets = {
    'arrifli': 'arrifli ${1:name}(${2:params}) {\n\t${0}\n}',
    'iza': 'iza (${1:condition}) {\n\t${0}\n}',
    'hawel': 'hawel {\n\t${1}\n} law_sar_ma_sar (${2:error}) {\n\t${0}\n}'
};
class Ta5beesCompletionProvider {
    provideCompletionItems(document, position) {
        const completions = [];
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
exports.Ta5beesCompletionProvider = Ta5beesCompletionProvider;
