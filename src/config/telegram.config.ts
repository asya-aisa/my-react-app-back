import { Telegram } from 'src/telegram/telegram.interface'

export const getTelegramConfig = (): Telegram => ({
	//https://api.telegram.org/bot<token>/getUpdates   - получить чат айди

	chatId: '964368444',
	token: '6574148719:AAHdme1q36b8idy274cmUyP7FCcHLHPl1-c',
})
