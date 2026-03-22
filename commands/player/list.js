const { SlashCommandBuilder } = require('discord.js');

//TODO : Add ROLES to server DM and PLAYER
//TODO : Allow for this command to accept the parameter
//TODO : Make a handler for each ROLE : DM and PLAYER
module.exports = {
	data: new SlashCommandBuilder().setName('list').setDescription('Gets list of (type)'),
	async execute(interaction) {
		await interaction.reply('List of (type) coming soon');
	},
};