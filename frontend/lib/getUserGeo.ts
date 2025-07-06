const defaultGeolocation = {
    lat: -3.745,
    lng: -38.523
}

export const getBrowserLocation = () => {
    return new Promise((resolve, rejects) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                    const {latitude:lat, longitude:lng} = position.coords;
                    resolve({lat, lng});
                },
                () => {
                    rejects(defaultGeolocation)
                }
            )
        } else {
            rejects(defaultGeolocation)
        }
    })
}