const { SlashCommandBuilder } = require('discord.js');

//TODO : Add ROLES to server DM and PLAYER
module.exports = {
	data: new SlashCommandBuilder().setName('ping').setDescription('Ping of (type)').addStringOption(option =>
		option.setName('ping_type')
            .setDescription('Ping Type').setRequired(true).addChoices(
                { name: 'Player', value: 'Player' },
                { name: 'DM', value: 'DM' },
            )
    ),
	async execute(interaction) {
		const inputString = interaction.options.getString('ping_type');
    	await interaction.reply({ content: `Ping of Type  (${inputString}) coming soon` });
	},
};