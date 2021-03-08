import { CONTACTS_URL } from '../constants/constants';

export function getContacts() {
    return fetch(CONTACTS_URL).then((res) => res.json());
}

export function deleteContact(id) {
    return fetch(CONTACTS_URL + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}

export function createContact(newItem) {
    return fetch(CONTACTS_URL, {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}
