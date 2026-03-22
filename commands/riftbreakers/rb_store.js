const { SlashCommandBuilder } = require('discord.js');

//TODO : Make this be able to accept multiple games (Future Update)
module.exports = {
	data: new SlashCommandBuilder().setName('rb_store').setDescription('Return info and link for Riftbreakers'),
	async execute(interaction) {
		await interaction.reply('Riftbreakers is a game designed by BlackOath Entertainment.' + 
            'Find more info here: https://blackoathgames.com/riftbreakers');
	},
};