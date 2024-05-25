document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
        uniqueId: generateUUID(), // generating a unique ID on the client side
        title: document.getElementById('title').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        isGraduate: document.getElementById('isGraduate').value === 'true'
    };

    try {
        const response = await fetch('/api/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('message').textContent = 'Form submitted successfully!';
            document.getElementById('form').reset();
        } else {
            document.getElementById('message').textContent = `Error: ${result.message}`;
        }
    } catch (error) {
        document.getElementById('message').textContent = `Error: ${error.message}`;
    }
});

function generateUUID() { // Function to generate a unique ID
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
