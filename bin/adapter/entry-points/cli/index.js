#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const packageJson = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, '../../../../package.json'), 'utf8'));
const isPackageJson = (arg) => {
    return (typeof arg === 'object' &&
        arg !== null &&
        'version' in arg &&
        typeof arg.version === 'string');
};
if (!isPackageJson(packageJson)) {
    throw new Error('package.json is not found');
}
const program = new commander_1.Command();
program
    .version(packageJson.version)
    .name('issue-describer')
    .description(`Generate text to describe an issue.
It'll help you to copy about issue for your AI/ChatGPT.
`)
    .argument('<issueUurl>', 'GitHub issue url')
    .action(async (issueUrl) => {
    console.log(`🚀 Describe ${issueUrl} 🚀`);
    console.log(`✨🚀 Done 🚀✨`);
});
if (process.argv) {
    program.parse(process.argv);
}
//# sourceMappingURL=index.js.map