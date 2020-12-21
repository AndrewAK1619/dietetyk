const createRequestAction = (url = '', config = {}) => {
    // tutaj można robić w przyszłości pewne konfiguracje np dla sessionToken (wyciąganie ze strora itd)
    //na razie możecie zwracać zamiast bloku funkcji, od razu wykonanie fetch
    return fetch(url, {
      method: config.method || "GET",
      mode: config.mode, //domyślnie, jak nie przekażecie mode to będzie wysyłany 'cors'
      headers: {
        "Accept": "application/json",
        "Content-type": config.contentType || "text/plain",
      },
      body: JSON.stringify(config.body)
    })
    .then(response => response.json());
}  