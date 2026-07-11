document.getElementById('awbForm').addEventListener('submit', function(event) {
    // 1. Modulo 7 Validation for AWB Number
    const awbInput = document.getElementById('awb_number').value.replace(/[^0-9]/g, ''); // Strip hyphens/spaces
    
    if (awbInput.length !== 11) {
        alert('Error: Air Waybill number must be exactly 11 digits.');
        event.preventDefault();
        return;
    }

    const coreNumber = parseInt(awbInput.substring(3, 10), 10); // Next 7 digits (serial number)
    const checkDigit = parseInt(awbInput.substring(10, 11), 10); // Last digit
    
    if (coreNumber % 7 !== checkDigit) {
        alert('Error: Invalid AWB Number. Modulo 7 check failed.');
        event.preventDefault();
        return;
    }

    // 2. IATA Airport Code Validation
    const origin = document.getElementById('origin').value.toUpperCase().trim();
    const destination = document.getElementById('destination').value.toUpperCase().trim();
    const iataRegex = /^[A-Z]{3}$/;

    if (!iataRegex.test(origin) || !iataRegex.test(destination)) {
        alert('Error: Origin and Destination must be valid 3-letter IATA airport codes (e.g., DXB, JFK).');
        event.preventDefault();
        return;
    }
});
