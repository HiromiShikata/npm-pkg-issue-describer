#!/usr/bin/env node
import { Command } from 'commander';

import fs from 'fs';
import path from 'path';
const packageJson: unknown = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../../package.json'), 'utf8'),
);
const isPackageJson = (arg: unknown): arg is { version: string } => {
  return (
    typeof arg === 'object' &&
    arg !== null &&
    'version' in arg &&
    typeof arg.version === 'string'
  );
};
if (!isPackageJson(packageJson)) {
  throw new Error('package.json is not found');
}

const program = new Command();
program
  .version(packageJson.version)
  .name('issue-describer')
  .description(
    `Generate text to describe an issue.
It'll help you to copy about issue for your AI/ChatGPT.
`,
  )
  .argument('<issueUurl>', 'GitHub issue url')
  .action(async (issueUrl: string) => {
    console.log(`🚀 Describe ${issueUrl} 🚀`);
    console.log(`✨🚀 Done 🚀✨`);
  });
if (process.argv) {
  program.parse(process.argv);
}
