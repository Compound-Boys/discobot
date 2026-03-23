const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('welcome').setDescription('welcome'),
	async execute(interaction) {
		await interaction.reply('Welcome, (This User)! Hope you are ready to game!');
	},
};