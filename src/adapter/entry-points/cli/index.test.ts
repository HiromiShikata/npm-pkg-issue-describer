import { execSync } from 'child_process';

describe('npx script execution test', () => {
  describe('help', () => {
    it('should display the full help message without error', async () => {
      const output = execSync(
        'npx ts-node ./src/adapter/entry-points/cli/index.ts --help',
      ).toString();
      expect(output.trim()).toEqual(
        `Usage: issue-describer [options] <issueUurl>

Generate text to describe an issue.
It'll help you to copy about issue for your AI/ChatGPT.

Arguments:
  issueUurl      GitHub issue url

Options:
  -V, --version  output the version number
  -h, --help     display help for command
`.trim(),
      );
    });
  });

  describe('execute', () => {
    it('should run the script without error', async () => {
      const output = execSync(
        `npx ts-node ./src/adapter/entry-points/cli/index.ts HiromiShi  kata`,
      ).toString();
      expect(output.trim()).toContain('✨🚀 Done 🚀✨');
    });
  });
});
