import { dialog, invoke } from "@tauri-apps/api"
import { getState, setState } from "../stores/state"
import { TOTP } from "otpauth"
import logger from "./logger"

const state = getState()

/**
 * Convert codes from plain text to arrays
 * @param {string} text
 * @param {number} sortNumber
 * @return {LibImportFile} Import file structure
 */
export const textConverter = (text: string, sortNumber: number): LibImportFile => {
	const data: string[] = []
	let names: string[] = []
	let secrets: string[] = []
	const issuers: string[] = []
	const types: string[] = []
	const uniqIds: string[] = []

	// remove double quotes, next line, split new lines
	const convertedText = text.replace(/"/g, "").replace(/,/g, "\n").split(/\n/)

	// create array
	while (convertedText.length) {
		data.push(convertedText.shift())
	}

	// remove first blank line
	data.splice(0, 1)

	// remove blank strings
	for (let i = 0; i < data.length; i++) {
		if (data[i] === "" || data[i] === "\r" || data[i] === "\n" || data[i] === "\r\n") {
			data.splice(i, 1)
		}
	}

	for (let i = 0; i < data.length; i++) {
		// Push names to array
		if (data[i].startsWith("Name")) {
			const name = data[i].slice(8).trim()

			if (name.length > 40) {
				names.push(`${name.slice(0, 38)}...`)
			} else {
				names.push(name)
			}
		}

		// Push secrets to array
		if (data[i].startsWith("Secret")) {
			const secret = data[i].slice(8).trim()

			try {
				new TOTP({
					secret,
				}).generate()
			} catch (error) {
				dialog.message("Failed to generate TOTP code from secret. \n\nMake sure you import file is correct!", { type: "error" })
				logger.error("Failed to generate TOTP code from secret")

				state.importData = null
				setState(state)

				return
			}

			secrets.push(secret)
		}

		// Push issuers to array
		if (data[i].startsWith("Issuer")) {
			const issuer = data[i].slice(8).trim()

			if (issuer.length > 16) {
				issuers.push(`${issuer.slice(0, 14)}...`)
			} else {
				issuers.push(issuer)
			}
		}

		// Push types to array
		if (data[i].startsWith("Type")) {
			const type = data[i].slice(8).trim()

			types.push(type)
		}
	}

	// Assign unique ids to each code
	for (let i = 0; i < names.length; i++) {
		uniqIds.push(crypto.randomUUID())
	}

	// Sort codes
	const originalIssuers = [...issuers]

	const sort = () => {
		const newNames = []
		const newSecrets = []

		issuers.forEach((element) => {
			for (let i = 0; i < originalIssuers.length; i++) {
				if (element === originalIssuers[i]) {
					newNames.push(names[i])
					newSecrets.push(secrets[i])
				}
			}
		})

		names = newNames
		secrets = newSecrets
	}

	if (sortNumber === 1) {
		issuers.sort((a, b) => {
			return a.localeCompare(b)
		})

		sort()
	} else if (sortNumber === 2) {
		issuers.sort((a, b) => {
			return b.localeCompare(a)
		})

		sort()
	}

	return {
		names,
		secrets,
		issuers,
		types,
		uniqIds,
	}
}

/**
 * Convert TOTP QR code pictures to string
 * @param {string} data
 * @return {string} string
 */
export const totpImageConverter = (data: string): string => {
	// get url
	let url = data.replaceAll(/\s/g, "")
	url = url.slice(15)

	// get name
	const nameIndex = url.match(/[?]/)
	const name = url.slice(0, nameIndex.index)
	url = url.slice(name.length + 1)

	// get secret
	const secretIndex = url.match(/[&]/)
	const secret = url.slice(7, secretIndex.index)
	url = url.slice(secret.length + 14 + 1)

	// get issuer
	const issuerIndex = url.match(/[&]/)
	let issuer = issuerIndex ? url.slice(0, issuerIndex.index) : url

	// check if issuer is empty
	if (issuer === "") {
		issuer = name
	}

	// add to final string
	return `\nName:   ${name} \nSecret: ${secret} \nIssuer: ${issuer} \nType:   OTP_TOTP\n`
}

/**
 * Convert Migration QR code pictures to string
 * @param {string} data
 * @return {string} string
 */
export const migrationImageConverter = async (data: string): Promise<string> => {
	// return string
	let returnString = ""

	// decode data
	const decoded: LibCodesFormat[] = await invoke("google_authenticator_converter", { secret: data })

	if (decoded.length === 0) {
		return ""
	}

	// make a string
	decoded.forEach((element) => {
		const tempString = `\nName:   ${element.name} \nSecret: ${element.secret} \nIssuer: ${element.issuer} \nType:   OTP_TOTP\n`
		returnString += tempString
	})

	return returnString
}

/**
 * Convert markdown to text
 */
export const markdownConverter = (text: string) => {
	const body = text
		.replaceAll("###", "")
		.replaceAll("*", " -")
		.replaceAll(/(#[0-9])\w+/g, "")
		.replaceAll("-  ", "- ")

	return body
}

/**
 * Convert base64 to text
 */
export const decodeBase64 = (text: string) => {
	return atob(text)
}

/**
 * Convert text to base64
 */
export const encodeBase64 = (text: string) => {
	return btoa(text)
}
