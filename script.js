document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for the encrypt button
    document.querySelector('.main__main-text__bottom_buttons__button-encrypt').addEventListener('click', () => {
        const text = document.querySelector('textarea').value; // Get the text from the textarea
        const encryptedText = encryptText(text); // Encrypt the text
        displayResult(encryptedText, text); // Display the encrypted text
    });

    // Add event listener for the decrypt button
    document.querySelector('.main__main-text__bottom_buttons__button-decrypt').addEventListener('click', () => {
        const text = document.querySelector('textarea').value; // Get the text from the textarea
        const decryptedText = decryptText(text); // Decrypt the text
        displayResult(decryptedText, text); // Display the decrypted text
    });

    // Function to encrypt the text based on specific rules
    function encryptText(text) {
        return text
            .replace(/e/g, "enter") // Replace "e" with "enter"
            .replace(/i/g, "imes")  // Replace "i" with "imes"
            .replace(/a/g, "ai")    // Replace "a" with "ai"
            .replace(/o/g, "ober")  // Replace "o" with "ober"
            .replace(/u/g, "ufat"); // Replace "u" with "ufat"
    }

    // Function to decrypt the text based on specific rules
    function decryptText(text) {
        return text
            .replace(/enter/g, "e") // Replace "enter" with "e"
            .replace(/imes/g, "i")  // Replace "imes" with "i"
            .replace(/ai/g, "a")    // Replace "ai" with "a"
            .replace(/ober/g, "o")  // Replace "ober" with "o"
            .replace(/ufat/g, "u"); // Replace "ufat" with "u"
    }

    // Function to handle the display of the result or the default view
    function displayResult(result, originalText) {
        const defaultView = document.getElementById('default-view'); // Get the default view div
        const resultView = document.getElementById('result-view'); // Get the result view div

        // Check if the original text is empty or contains only spaces
        if (originalText.trim() === "") {
            // If the text is empty, show the default view and hide the result view
            defaultView.classList.remove('hidden'); // Remove 'hidden' class from default view to make it visible
            resultView.classList.add('hidden'); // Add 'hidden' class to result view to hide it
        } else {
            // If the text is not empty, hide the default view and show the result view
            defaultView.classList.add('hidden'); // Add 'hidden' class to default view to hide it
            resultView.classList.remove('hidden'); // Remove 'hidden' class from result view to make it visible
            document.getElementById('result-text').innerText = result; // Display the encrypted/decrypted text in the result view
        }
    }
});