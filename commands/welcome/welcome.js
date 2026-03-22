const { SlashCommandBuilder } = require('discord.js');

//Add to On-Join
module.exports = {
	data: new SlashCommandBuilder().setName('Welcome').setDescription('Welcome Message').addChoices(
        { name: 'Player', value: 'Someone looking to go on an adventure' },
        { name: 'DM/GM', value: 'Someone looking to run an adventure' },
    ),
	async execute(interaction) {
		await interaction.reply('Welcome to the server, (This User). I hope you are ready to game!\n'+
                                'I am a'
        );
	},
};