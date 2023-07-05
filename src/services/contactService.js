import axios from 'axios'
import { FORM_CONTACT_API } from '../utils/apiRoutes'
import { getTokenConfig } from './tokenConfig'

export const contactOwnerService = async ({ userEmail, userName, ownerEmail, product }) => {
	console.log({
		userEmail: userEmail,
		userName: userName || null,
		ownerEmail: ownerEmail,
		product: product,
		page: window.location.href,
	})
	const config = getTokenConfig()

	await axios.post(
		`${FORM_CONTACT_API}/contact-owner`,
		{
			emailUser: userEmail,
			nameUser: userName,
			ownerEmail: ownerEmail,
			product,
		},
		config
	)

	return true
}

export const contactContacUsService = async ({ name, email, message }) => {
	console.log({
		name,
		email,
		message,
	})

	await axios.post(`${FORM_CONTACT_API}/contact-us`, {
		name,
		email,
		message,
	})

	return true
}
