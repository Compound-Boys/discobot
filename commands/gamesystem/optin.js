const { SlashCommandBuilder } = require('discord.js');
const { insertUser } = require('../../database/creates/create_user');

//TODO : Add ROLES to server DM and PLAYER
module.exports = {
	data: new SlashCommandBuilder().setName('optin').setDescription('Opt-in to the game system.').addStringOption(option =>
		option.setName('optin_yes')
            .setDescription('Opt-in to the game system').setRequired(true).addChoices(
                { name: 'I Consent', value: 'Player' },
            )
    ),
	async execute(interaction) {
        const exampleUser = {
            id: interaction.user.id,
            username: interaction.user.username,
            discriminator: 'Added By Bot'
        };
        insertUser(exampleUser);
        return await interaction.reply({ content: `Opt-in successful! Welcome to the game system, ${interaction.user.username}!` });
	},
};