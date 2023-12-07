const apiUrl = 'http://157.90.147.52:8088/api/'
export default {
    getBookings: async (id = '') => {
        return useFetch(apiUrl + 'bookings/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    postBookings: async () => {
        return useFetch(apiUrl + 'bookings/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    putBookings: async (id = '') => {
        return useFetch(apiUrl + 'bookings/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    deleteBookings: async (id = '') => {
        return useFetch(apiUrl + 'bookings/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    getBuildings: async (id = '') => {
        return useFetch(apiUrl + 'buildings/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    postBuildings: async () => {
        return useFetch(apiUrl + 'buildings/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    putBuildings: async (id = '') => {
        return useFetch(apiUrl + 'buildings/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    deleteBuildings: async (id = '') => {
        return useFetch(apiUrl + 'buildings/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    getFeatures: async (id = '') => {
        return useFetch(apiUrl + 'features/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    postFeatures: async () => {
        return useFetch(apiUrl + 'features/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    putFeatures: async (id = '') => {
        return useFetch(apiUrl + 'features/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    deleteFeatures: async (id = '') => {
        return useFetch(apiUrl + 'features/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    getFloors: async (id = '') => {
        return useFetch(apiUrl + 'floors/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    postFloors: async () => {
        return useFetch(apiUrl + 'floors/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    putFloors: async (id = '') => {
        return useFetch(apiUrl + 'floors/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    deleteFloors: async (id = '') => {
        return useFetch(apiUrl + 'floors/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    getMessages: async (id = '') => {
        return useFetch(apiUrl + 'messages/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    getMessagesByTicketId: async (id) => {
        return useFetch(apiUrl + 'messages/ByTicket/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    postMessages: async (data) => {
        return useFetch(apiUrl + 'messages/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    putMessages: async (id = '') => {
        return useFetch(apiUrl + 'messages/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    deleteMessages: async (id = '') => {
        return useFetch(apiUrl + 'messages/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    getTickets: async (id = '') => {
        return useFetch(apiUrl + 'tickets/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    postTickets: async (data) => {
        return useFetch(apiUrl + 'tickets/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    putTickets: async (id = '', data) => {
        return useFetch(apiUrl + 'tickets/' + id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    deleteTickets: async (id = '') => {
        return useFetch(apiUrl + 'tickets/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    getUsers: async (id = '') => {
        return useFetch(apiUrl + 'users/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    postUsers: async (data) => {
        return useFetch(apiUrl + 'users/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    putUsers: async (id = '') => {
        return useFetch(apiUrl + 'users/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    deleteUsers: async (id = '') => {
        return useFetch(apiUrl + 'users/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    getWorkSpaces: async (id = '') => {
        return useFetch(apiUrl + 'workspaces/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    postWorkSpaces: async () => {
        return useFetch(apiUrl + 'workspaces/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    putWorkSpaces: async (id = '', data) => {
        return useFetch(apiUrl + 'workspaces/' + id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    deleteWorkSpaces: async (id = '') => {
        return useFetch(apiUrl + 'workspaces/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}