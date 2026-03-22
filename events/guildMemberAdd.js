const { Events, MessageFlags } = require('discord.js');

module.exports = {
	name: Events.GuildMemberAdd,
	async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.ping);
	}
};