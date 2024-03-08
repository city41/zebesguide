function sendUint8ArrayToAnchorTag(data: Uint8Array, fileName: string) {
	const fileBlob = new Blob([data.buffer], {
		type: 'application/octet-stream',
	});

	// stupid browser hack needed to download the file with a usable name
	const a = document.createElement('a');
	a.style.setProperty('display', 'none');

	const fileUrl = window.URL.createObjectURL(fileBlob);

	a.href = fileUrl;
	a.download = fileName;
	a.click();
	window.URL.revokeObjectURL(fileUrl);
}

export { sendUint8ArrayToAnchorTag };
