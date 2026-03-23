const { SlashCommandBuilder } = require('discord.js');

//TODO : Add ROLES to server DM and PLAYER
module.exports = {
	data: new SlashCommandBuilder().setName('list').setDescription('Gets list of (type)').addStringOption(option =>
		option.setName('list_type')
            .setDescription('List Type').setRequired(true).addChoices(
                { name: 'Player', value: 'Player' },
                { name: 'DM', value: 'DM' },
            )
    ),
	async execute(interaction) {
		const inputString = interaction.options.getString('list_type');
    	await interaction.reply({ content: `List of Type  (${inputString}) coming soon` });
	},
};