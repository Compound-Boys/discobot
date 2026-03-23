const { SlashCommandBuilder } = require('discord.js');

//TODO : Add ROLES to server DM and PLAYER
module.exports = {
	data: new SlashCommandBuilder().setName('link').setDescription('Link User').addStringOption(option =>
		option.setName('link_type')
            .setDescription('Link Type').setRequired(true).addChoices(
                { name: 'Player', value: 'Player' },
                { name: 'DM', value: 'DM' },
            )
    ),
	async execute(interaction) {
		const inputString = interaction.options.getString('link_type');
    	await interaction.reply({ content: `Link of Type  (${inputString}) coming soon` });
	},
};