function generateQR() {
    const urlInput = document.getElementById('url');
    const qrCodeDiv = document.getElementById('qrCode');
    const message = document.getElementById('message');
    const downloadBtn = document.getElementById('downloadBtn');

    const text = urlInput.value.trim();

    qrCodeDiv.innerHTML = '';
    downloadBtn.style.display = 'none';
    message.textContent = '';

    if (!text) {
        message.textContent = 'Please enter some text or URL!';
        return;
    }

    message.style.color = '#333';
    message.textContent = 'Generating QR code...';

    // Use QRCode library to generate
    QRCode.toDataURL(text, { width: 250, margin: 2 }, function (err, url) {
        if (err) {
            message.textContent = 'Failed to generate QR code.';
            console.error(err);
            return;
        }

        const img = document.createElement('img');
        img.src = url;
        qrCodeDiv.appendChild(img);

        downloadBtn.href = url;
        downloadBtn.style.display = 'inline-block';

        message.style.color = 'green';
        message.textContent = 'QR code generated successfully!';
    });
}

function clearQR() {
    document.getElementById('url').value = '';
    document.getElementById('qrCode').innerHTML = '';
    document.getElementById('message').textContent = '';
    document.getElementById('downloadBtn').style.display = 'none';
}
