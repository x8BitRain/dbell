#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import  gradient from 'gradient-string';

const startStr = '↘'.repeat(52);
const endStr = '↖'.repeat(52);
const startLine = gradient.summer(`${startStr}\n\n`)
const endLine = gradient.summer(`\n\n${endStr}`)

const boxenOptions = {
  padding: 1,
  width: 60,
  title: "btr.pm",
  titleAlignment: "center",
  borderStyle: "round",
  borderColor: "#ffffff",
};

const intro = chalk.bold(
  "Hi, I'm Dash. I'm a frontend developer that builds Vue, React and Ember SPAs. Click a link, any link:\n\n",
);

const links = [
  {
		name: chalk.hex("#fff")("🌏 Website"),
	  url: "   https://btr.pm"
  },
	{
		name: chalk.hex("#fff")("🔨 Projects"),
		url: "  https://btr.pm/projects"
	},
	{
		name: chalk.hex("#fff")("🐙 Github"),
		url: "    https://github.com/x8BitRain"
	},
	{
		name: chalk.hex("#fff")("🐦 Twitter"),
		url: "   https://twitter.com/x8BitRain"
	},
	{
		name: chalk.hex("#fff")("⛓  LinkedIn"),
		url: "  https://www.linkedin.com/in/dashbell"
	},
	{
		name: chalk.hex("#fff")("🖋  CodePen"),
		url: "   https://codepen.io/BitRain"
	},
	{
		name: chalk.hex("#fff")("📧 Email"),
		url: "     dbell@btr.pm"
	},
];


const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen( startLine + intro + linkList + endLine, boxenOptions));
