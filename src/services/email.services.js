
import api from '../utils/api'

export function gerAllInitialEmails() {
    return api.get("/")
}